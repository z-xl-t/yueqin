<script setup lang="ts">
import { svgTemplate } from '@/data/svgTemplate'
import { flat } from '@/utils';

const svgAllPoint: PointType  = flat(svgTemplate.svgAllPoint);
console.log(svgTemplate)
console.log(svgAllPoint)
</script>
<template>
<svg
  version="1.1"
  baseProfile="full"
  :width="svgTemplate.baseSvgWidth"
  :height="svgTemplate.baseSvgHeight"
  xmlns="http://www.w3.org/2000/svg" :font-size="svgTemplate.svgFontSize">
    <g>
      <!-- 弦线 -->
      <line v-for="(item, i) in svgTemplate.svgXianLine" :key="i" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="svgTemplate.lineStroke" :stroke-width="svgTemplate.lineWidth"></line>
    </g>
    <g>
      <!-- 弦名 -->
      <text v-for="(item, i) in svgTemplate.svgXianNameText" :key="i" :x="item.x + item?.offsetX" :y="item.y">{{ item.content }}</text>
    </g>
    <g>
      <!-- 品线 -->
      <line v-for="(item, i) in svgTemplate.svgPingLine" :key="i" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="svgTemplate.lineStroke"  :stroke-width="svgTemplate.lineWidth"></line>
    </g>
    <g>
      <!-- 品名 -->
      <text v-for="(item, i) in svgTemplate.svgPingNameText" :key="i" :x="item.x" :y="item.y ">{{ item.content }}</text>
    </g>
    <g>
      <!-- 点 -->
      <circle v-for="(item, i) in svgAllPoint" :key="i" :cx="item.x" :cy="item.y" :r="svgTemplate.circleRadius" ></circle>
    </g>
</svg>

</template>

<style scoped lang="scss">
svg {
  transform: scale(0.8);
}
</style>