<script setup lang="ts">
import type { SvgYueQinPingDiaoType } from '@/types';
const props = defineProps<{
  yueQinPingDiaoPoint: SvgYueQinPingDiaoType
}>()

</script>
<template>
  <g>
    <!-- <text v-for="(item, i) in props.jianpu.svgTextGao" :key="i" :x="item.x" :y="item.y">{{ item.content }}</text>
    <text :x="jianpu.svgTextBase.x" :y="jianpu.svgTextBase.y">{{ props.jianpu.svgTextBase.content }}</text>
    <text v-for="(item, i) in props.jianpu.svgTextDi" :key="i" :x="item.x" :y="item.y">{{ item.content }}</text> -->
  </g>
</template>