<template>
  <ClientOnly>
    <div ref="paperRef" class="render-abc"></div>
    <div v-if="props.isplay">
      <div ref="audioRef" class="render-audio"></div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { waitForAbcjs } from '../wait-for-abcjs'
import 'abcjs/abcjs-audio.css'

interface Props {
  abc: string
  options?: object
  isplay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isplay: false, // 设置 ifPlay 的默认值为 false
})

const paperRef = ref(null)
const audioRef = ref(null)
const visualObj = ref(null)
const defaultOptions = {
  paddingleft: 0,
  paddingright: 0,
  responsive: 'resize',
}

onMounted(async () => {
  await waitForAbcjs()
  if (paperRef.value) {
    visualObj.value = abcjs.renderAbc(paperRef.value, props.abc, defaultOptions, props.options)
  }
  if (abcjs.synth.supportsAudio()) {
    const synthControl = new abcjs.synth.SynthController()
    synthControl.load(audioRef.value, null, {
      displayLoop: true,
      displayRestart: true,
      displayPlay: true,
      displayProgress: true,
      displayWarp: true,
    })
    const createSynth = new abcjs.synth.CreateSynth()
    const audioParams = { chordsOff: true }
    createSynth
      .init({ visualObj: visualObj.value[0] })
      .then(function () {
        synthControl.setTune(visualObj.value[0], false, audioParams)
      })
      .catch(function (error) {
        console.warn('Audio problem:', error)
      })
  } else {
    const audioElement = this.$refs.audioRef
    audioElement.innerHTML = 'Audio is not supported in this browser.'
  }
})
</script>
