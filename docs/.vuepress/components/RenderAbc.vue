<template>
  <ClientOnly>
    <div ref="paperRef" class="render-abc"></div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { waitForAbcjs } from '../wait-for-abcjs'

interface Props {
  abc: string
  options?: object
}

const props = defineProps<Props>()

const paperRef = ref(null) // 创建一个ref引用
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
</script>
