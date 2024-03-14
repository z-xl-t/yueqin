<script setup lang="ts">
import {ref, computed } from 'vue'
import type { SvgAttrType, SvgTextAttrType, YinFuBaseType } from '@/types';
const props = defineProps<{
    svgAttr: SvgAttrType,
    yinfu: YinFuBaseType,
}>()


const gaoCount = ref(props.yinfu.gao);
const baseHeight=50
const generatedGaoDian = computed(() => {
  const texts = [] as Array<SvgTextAttrType>
  for(let i=0; i < gaoCount.value; ++i) {
    texts.push({x:4, y: baseHeight - i * 8 - 20, content:'.'})
   
  }
  return texts;
})

const diCount = ref(props.yinfu.di);
const generatedDiDian = computed(() => {
  const texts = [] as Array<SvgTextAttrType>
  for(let i=0; i < diCount.value; ++i) {
    texts.push({x:4, y: baseHeight + i * 8 + 8, content:'.'}) 
  }
  return texts;
})


</script>
<template>
<svg
  version="1.1"
  baseProfile="full"
  :width="props.svgAttr.width"
  :height="props.svgAttr.height"
  xmlns="http://www.w3.org/2000/svg" :viewBox="props.svgAttr.viewBox" :font-size="props.svgAttr.fontSize">
  <g>
    <text v-for="(item, i) in generatedGaoDian" :key="i" :x="item.x" :y="item.y">.</text>
    <text x="0" y="50">{{ props.yinfu.ji }}</text>
    <text v-for="(item, i) in generatedDiDian" :key="i" :x="item.x" :y="item.y">.</text>
  </g>
</svg>

</template>