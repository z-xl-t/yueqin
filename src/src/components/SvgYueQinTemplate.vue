<script setup lang="ts">
import type { YueQinOptionsType, SvgYueQinTemplateDataType } from '@/types'
import { ref, watch } from 'vue'

const props = defineProps<{
  yueqinOptions: YueQinOptionsType
  svgTemplateData: SvgYueQinTemplateDataType
}>()

const width = ref(0)
const height = ref(0)
const viewBoxStr = ref('0')

watch(
  () => props.yueqinOptions.scale,
  (newValue, oldValue) => {
    render()
  },
  { deep: true, immediate: true }
)
watch(
  () => ({
    baseWidth: props.svgTemplateData.svgBaseWidth,
    baseHeight: props.svgTemplateData.svgBaseHeight
  }),
  () => {
    render()
  },
  { deep: true, immediate: true }
)

function render() {
  width.value = props.svgTemplateData.svgBaseWidth * props.yueqinOptions.scale
  height.value = props.svgTemplateData.svgBaseHeight * props.yueqinOptions.scale
  viewBoxStr.value = `0 0 ${props.svgTemplateData.svgBaseWidth} ${props.svgTemplateData.svgBaseHeight}`
}
</script>
<template>
  <div class="svg-template">
    <svg
      version="1.1"
      baseProfile="full"
      :width="width"
      :height="height"
      :viewBox="viewBoxStr"
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
          :x="item.x + (item?.offsetX ?? 0)"
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
      <!-- 点位 -->
      <g v-for="(item, i) in svgTemplateData.svgYinPoint" :key="i">
        <circle
          v-for="(subItem, j) in item"
          :key="j"
          :cx="subItem.x"
          :cy="subItem.y"
          :r="svgTemplateData.svgCircleRadius"
        ></circle>
      </g>
      <!-- 简谱点位 -->
      <g v-if="yueqinOptions.ifShowJianPu">
        <g v-for="(item, i) in svgTemplateData.svgYinJianPu" :key="i">
          <g v-for="(subItem, j) in item" :key="j">
            <g v-if="subItem.jianPu.base.includes('#')">
              <g v-if="yueqinOptions.ifShowSharp">
                <text
                  :x="subItem.point.x + (subItem.point?.offsetX ?? 0) + 3"
                  :y="subItem.point.y + (subItem.point?.offsetY ?? 0) + -4 * n + -14"
                  v-for="(n, k) in Array.from({ length: subItem.jianPu.gao }, (_, i) => i + 1)"
                  :key="k"
                >
                  <tspan>.</tspan>
                </text>
                <text
                  :x="subItem.point.x + (subItem.point?.offsetX ?? 0)"
                  :y="subItem.point.y + (subItem.point?.offsetY ?? 0)"
                >
                  <tspan>{{ subItem.jianPu.base }}</tspan>
                </text>
                <text
                  :x="subItem.point.x + (subItem.point?.offsetX ?? 0) + 3"
                  :y="subItem.point.y + (subItem.point?.offsetY ?? 0) + 4 * n + 2"
                  v-for="(n, k) in Array.from({ length: subItem.jianPu.di }, (_, i) => i + 1)"
                  :key="k"
                >
                  .
                </text>
              </g>
            </g>
            <g v-else>
              <text
                :x="subItem.point.x + (subItem.point?.offsetX ?? 0) + 3"
                :y="subItem.point.y + (subItem.point?.offsetY ?? 0) + -4 * n + -14"
                v-for="(n, k) in Array.from({ length: subItem.jianPu.gao }, (_, i) => i + 1)"
                :key="k"
              >
                <tspan>.</tspan>
              </text>
              <text
                :x="subItem.point.x + (subItem.point?.offsetX ?? 0)"
                :y="subItem.point.y + (subItem.point?.offsetY ?? 0)"
              >
                <tspan>{{ subItem.jianPu.base }}</tspan>
              </text>
              <text
                :x="subItem.point.x + (subItem.point?.offsetX ?? 0) + 3"
                :y="subItem.point.y + (subItem.point?.offsetY ?? 0) + 4 * n + 2"
                v-for="(n, k) in Array.from({ length: subItem.jianPu.di }, (_, i) => i + 1)"
                :key="k"
              >
                .
              </text>
            </g>
          </g>
        </g>
      </g>
      <!-- 固定音高点位 -->
      <g v-if="yueqinOptions.ifShowPianoKey">
        <g v-for="(item, i) in svgTemplateData.svgYinPianoKey" :key="i">
          <g v-for="(subItem, j) in item" :key="j">
            <text
              :x="subItem.point.x + (subItem.point?.offsetX ?? 0) + 20"
              :y="subItem.point.y + (subItem.point?.offsetY ?? 0) - 20"
            >
              <tspan v-if="subItem.pianoKey.basePiano.includes('#')">
                <tspan v-if="yueqinOptions.ifShowSharp">
                  {{ `${subItem.pianoKey.basePiano}${subItem.pianoKey.current}` }}
                </tspan>
              </tspan>
              <tspan v-else>{{ `${subItem.pianoKey.basePiano}${subItem.pianoKey.current}` }}</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.svg-template {
  overflow: auto;
  display: flex;
  svg {
    margin: 0 auto;
  }
}
</style>
