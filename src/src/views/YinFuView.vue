<script setup lang="ts">
import type { SvgAttrType, YinFuBaseType } from '@/types';
import YinFuBae from '../components/YinFuBase.vue';

const yinFuArr = [
  { ji: 1, gao: 0, di: 2},
  { ji: 2, gao: 0, di: 2},
  { ji: 3, gao: 0, di: 2},
  { ji: 4, gao: 0, di: 2},
  { ji: 5, gao: 0, di: 2},
  { ji: 6, gao: 0, di: 2},
  { ji: 7, gao: 0, di: 2},  

  { ji: 1, gao: 0, di: 1},
  { ji: 2, gao: 0, di: 1},
  { ji: 3, gao: 0, di: 1},
  { ji: 4, gao: 0, di: 1},
  { ji: 5, gao: 0, di: 1},
  { ji: 6, gao: 0, di: 1},
  { ji: 7, gao: 0, di: 1},

  { ji: 1, gao: 0, di: 0},
  { ji: 2, gao: 0, di: 0},
  { ji: 3, gao: 0, di: 0},
  { ji: 4, gao: 0, di: 0},
  { ji: 5, gao: 0, di: 0},
  { ji: 6, gao: 0, di: 0},
  { ji: 7, gao: 0, di: 0},
  
  { ji: 1, gao: 1, di: 0},
  { ji: 2, gao: 1, di: 0},
  { ji: 3, gao: 1, di: 0},
  { ji: 4, gao: 1, di: 0},
  { ji: 5, gao: 1, di: 0},
  { ji: 6, gao: 1, di: 0},
  { ji: 7, gao: 1, di: 0},

  { ji: 1, gao: 2, di: 0},
  { ji: 2, gao: 2, di: 0},
  { ji: 3, gao: 2, di: 0},
  { ji: 4, gao: 2, di: 0},
  { ji: 5, gao: 2, di: 0},
  { ji: 6, gao: 2, di: 0},
  { ji: 7, gao: 2, di: 0},
] as YinFuBaseType[]

const svgAttr = {
  width: 100,
  height: 100,
  viewBox: "0,0,100,100",
  fontSize: "20px",
} as SvgAttrType
</script>

<template>
  <main>
    <div>基本音符</div>
    
    <YinFuBae :svgAttr="svgAttr" v-for="(item, i) in yinFuArr" :key="i" :yinfu="item"/>
  </main>
</template>
