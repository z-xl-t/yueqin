<script setup lang="ts">
import type { YueQinEqualTemperamentSvgPointType } from '@/types'
const props = defineProps<{
  svgYueQinEqualTemperametArray: YueQinEqualTemperamentSvgPointType[][]
}>()

</script>

<template>
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
  </g>
</template>
