<script setup lang="ts">

import type { YueQinOptionsType, SvgYueQinTemplateDataType } from '@/types'

const props = defineProps<{
  yueqinOptions: YueQinOptionsType,
  svgTemplateData: SvgYueQinTemplateDataType
}>()

console.log(props.svgTemplateData)

</script>
<template>
  <div class="svg-template">
    <svg
      version="1.1"
      baseProfile="full"
      :width="svgTemplateData.svgBaseWidth"
      :height="svgTemplateData.svgBaseHeight"
      xmlns="http://www.w3.org/2000/svg"
      :font-size="svgTemplateData.svgFontSize"
    >
      <g>
        <!-- 弦线 -->
        <line
          v-for="(item, i) in svgTemplateData.svgXianLine"
          :key="i"
          :x1="item.x1"
          :y1="item.y1"
          :x2="item.x2"
          :y2="item.y2"
          :stroke="svgTemplateData.svgLineStroke"
          :stroke-width="svgTemplateData.svgLineWidth"
        ></line>
      </g>
      <g>
        <!-- 弦名 -->
        <text
          v-for="(item, i) in svgTemplateData.svgXianNameText"
          :key="i"
          :x="item.x + item?.offsetX"
          :y="item.y"
        >
          {{ item.content }}
        </text>
      </g>
      <g>
        <!-- 品线 -->
        <line
          v-for="(item, i) in svgTemplateData.svgPingLine"
          :key="i"
          :x1="item.x1"
          :y1="item.y1"
          :x2="item.x2"
          :y2="item.y2"
          :stroke="svgTemplateData.svgLineStroke"
          :stroke-width="svgTemplateData.svgLineWidth"
        ></line>
      </g>
      <g>
        <!-- 品名 -->
        <text v-for="(item, i) in svgTemplateData.svgPingNameText" :key="i" :x="item.x" :y="item.y">
          {{ item.content }}
        </text>
      </g>
      <g v-for="(item, i) in svgTemplateData.svgAllPoint" :key="i">

        <!-- 点 -->
        <circle
          v-for="(subItem, j) in item"
          :key="j"
          :cx="subItem.x"
          :cy="subItem.y"
          :r="svgTemplateData.svgCircleRadius"
        ></circle>
      </g>
      <!-- 简谱点位
      <g v-for="(item, i) in svgYueQinEqualTemperametArray" :key="i">
        <g v-for="(subItem, j) in item" :key="j">
          <text
            :x="subItem.x + subItem?.offsetX + 3"
            :y="subItem.y + subItem?.offsetY + (-4) * n  + (-14)"
            v-for="(n, k) in Array.from({ length: subItem.jianPu.gao }, (_, i) => i + 1)"
            :key="k"
          >.</text>
          <text :x="subItem.x + subItem?.offsetX" :y="subItem.y + subItem?.offsetY">{{
            subItem.jianPu.base
          }}</text>
          <text
            :x="subItem.x + subItem?.offsetX + 3"
            :y="subItem.y + subItem?.offsetY + (4) * n + (2)"
            v-for="(n, k) in Array.from({ length: subItem.jianPu.di }, (_, i) => i + 1)"
            :key="k"
          >.</text>
        </g>
      </g> -->
    </svg>
  </div>
</template>

<style>

</style>