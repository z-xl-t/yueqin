<script setup lang="ts">
import SvgTextYinFuBase from '@/components/SvgTextYinFuBase.vue';
import type { SvgTextAttrType, SvgTextYinFuBaseType, YinFuBaseType } from '@/types';

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

let baseX = 100
let baseY = 100

const yinfuSvgArr = []  as any

for(let i=0; i< yinFuArr.length; ++i) {
  const item = yinFuArr[i]
  const tmp = {} as SvgTextYinFuBaseType
  tmp.svgTextBase = {} as SvgTextAttrType
  tmp.svgTextGao = []
  tmp.svgTextDi = []
  tmp.svgTextBase.x = baseX
  tmp.svgTextBase.y = baseY
  console.log(tmp.svgTextBase)
  tmp.svgTextBase.content = `${item.ji}`
  for(let i=0; i<item.gao; ++i) {
    tmp.svgTextGao.push({x:baseX + 4, y: baseY - i * 8 - 20, content:'.'})
  }
  for(let i=0; i<item.di; ++i) {
    tmp.svgTextDi.push({x:baseX + 4, y: baseY + i * 8 + 8, content:'.'})
  }
  
  yinfuSvgArr.push(tmp)

  baseX += 100
  if (i % 7 == 6) {
    baseX = 100
    baseY += 100
  }
}

const yinfu = {
    svgTextBase: {x:100,y:100, content: '2'},
    yinfuBase: {ji:2,gao:2,di:0},
    svgTextGao:[{x:100 + 4 ,y:100 - 30,content:'.'}],
    svgTextDi: [{x:100 + 4 ,y:100 + 20,content: '.'}]

} as SvgTextYinFuBaseType
</script>

<template>
  <main>
    <div>基本音符</div>
    <svg
    version="1.1"
    baseProfile="full"
    width="800"
    height="800"
    xmlns="http://www.w3.org/2000/svg" font-size="20px">
    <SvgTextYinFuBase v-for="(item, i) in yinfuSvgArr" :key="i" :yinfu="item"></SvgTextYinFuBase>
    </svg>
  </main>
</template>
