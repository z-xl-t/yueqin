<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import 'abcjs/abcjs-audio.css'
import abcjs from 'abcjs'

import { onMounted } from 'vue'

// 定义一个会在组件挂载时调用的函数
const mountedHandler = () => {
  abcjs.renderAbc('paper', 'X:1\nK:D\nDD AA|BBA2|\n')
}

// 使用 onMounted 钩子来调用上面定义的函数
onMounted(mountedHandler)
</script>

<template>
  <main>
    <TheWelcome />
    <div id="paper"></div>
  </main>
</template>
