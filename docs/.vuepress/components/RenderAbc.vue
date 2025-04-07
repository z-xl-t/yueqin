<template>
  <ClientOnly>
    <div ref="paperRef" class="render-abc"></div>
    <!-- // todo -->
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
})

// 暴露给父组件的方法
defineExpose({
  getObj() {
    return visualObj.value ? visualObj.value[0] : null
  },
})

// todo: 播放音频
</script>
