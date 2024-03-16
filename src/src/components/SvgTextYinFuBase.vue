<script setup lang="ts">
import type { SvgTextYinFuBaseType } from '@/types';
const props = defineProps<{
    yinfu: SvgTextYinFuBaseType
}>()

</script>
<template>
  <g>
    <text v-for="(item, i) in props.yinfu.svgTextGao" :key="i" :x="item.x" :y="item.y">{{ item.content }}</text>
    <text :x="yinfu.svgTextBase.x" :y="yinfu.svgTextBase.y">{{ props.yinfu.svgTextBase.content }}</text>
    <text v-for="(item, i) in props.yinfu.svgTextDi" :key="i" :x="item.x" :y="item.y">{{ item.content }}</text>
  </g>
</template>