<script setup lang="ts">
import svgYueQinTemplate from '@/data/svgYueQinTemplate';
import type { SvgTextAttrType, SvgYueQinPingDiaoType } from '@/types';

import utils from '@/utils';
import YueQinPingDiaoBase from './YueQinPingDiaoBase.vue';

const allPoint = utils.flat(svgYueQinTemplate.allPoint) || [] as SvgTextAttrType[]
const allSvgYueQinPingDiaoPoint = utils.flat(svgYueQinTemplate.SvgYueQinPingDiaoPoint) || [] as SvgYueQinPingDiaoType[]

console.log(allPoint, allSvgYueQinPingDiaoPoint);
</script>
<template>
<svg
  version="1.1"
  baseProfile="full"
  :width="svgYueQinTemplate.baseSvgWidth"
  :height="svgYueQinTemplate.baseSvgHeight"
  xmlns="http://www.w3.org/2000/svg" :font-size="svgYueQinTemplate.svgFontSize">
    <g>
      <line v-for="(item, i) in svgYueQinTemplate.svgPing" :key="i" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="item.stroke" stroke-width="1"></line>
    </g>
    <g>
      <text v-for="(item, i) in svgYueQinTemplate.svgPingName" :key="i" :x="item.x" :y="item.y ">{{ item.content }}</text>
    </g>
    <g>
      <line v-for="(item, i) in svgYueQinTemplate.svgXian" :key="i" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="item.stroke" stroke-width="1"></line>
    </g>

    <g>
      <text v-for="(item, i) in svgYueQinTemplate.svgXianName" :key="i" :x="item.x" :y="item.y ">{{ item.content }}</text>
    </g>
    <g>
      <circle v-for="(item, i) in allPoint" :key="i" :cx="item.x" :cy="item.y" r="2" ></circle>
    </g>
    <g>
      <YueQinPingDiaoBase v-for="(item, i) in allSvgYueQinPingDiaoPoint" :key="i"  :yueQinPingDiaoPoint="item" />
    </g>
</svg>

</template>

<style scoped lang="scss">
svg {
  transform: scale(0.8);
}
</style>./YueQinPingDiaoBase.vue