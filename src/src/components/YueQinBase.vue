<script setup lang="ts">
import type { SvgTextAttrType } from '@/types';
import yueQinTemplate from '../data/YueQinTemplate'
import { CDiao } from '@/data/CDiao';
import utils from '@/utils';

console.log(yueQinTemplate)
const allPoint = utils.flat(yueQinTemplate.allPoint) || [] as SvgTextAttrType[]


</script>
<template>
<svg
  version="1.1"
  baseProfile="full"
  :width="yueQinTemplate.baseSvgWidth"
  :height="yueQinTemplate.baseSvgHeight"
  xmlns="http://www.w3.org/2000/svg" :font-size="yueQinTemplate.svgFontSize">
    <g>
      <line v-for="(item, i) in yueQinTemplate.ping" :key="i" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="item.stroke" stroke-width="1"></line>
    </g>
    <g>
      <line v-for="(item, i) in yueQinTemplate.xian" :key="i" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="item.stroke" stroke-width="1"></line>
    </g>
    <g>
      <text v-for="(item, i) in yueQinTemplate.ping" :key="i" :x="item.x1 - 100" :y="item.y1 + 8">第 {{ i + 1 }} 品</text>
    </g>
    <g>
      <text v-for="(item, i) in yueQinTemplate.xianName" :key="i" :x="item.x" :y="item.y ">{{ item.content }}</text>
    </g>
    <g v-for="(item, i) in CDiao" :key="i">
      <text v-for="(subItem, j) in item" :key="j" :x="subItem.x" :y="subItem.y"> {{ subItem.content }}</text>
    </g>
    <g>
      <circle v-for="(item, i) in allPoint" :key="i" :cx="item.x" :cy="item.y" r="2" ></circle>
    </g>

</svg>
</template>

<style scoped lang="scss">
svg {
  transform: scale(0.8);
}
</style>