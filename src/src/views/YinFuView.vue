<script setup lang="ts">
import SvgJianpuBase from '@/components/SvgJianpuBase.vue';
import { jianPus } from '@/data/jianpu';
import type { SvgTextAttrType, SvgTextJianPuType } from '@/types';


let baseX = 100
let baseY = 100

const jianpuSvgArr:SvgTextJianPuType[] = [] 

for(let i=0; i< jianPus.length; ++i) {
  const item = jianPus[i]
  const tmp = {} as SvgTextJianPuType
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
  
  jianpuSvgArr.push(tmp)

  baseX += 100
  if (i % 7 == 6) {
    baseX = 100
    baseY += 100
  }
}
</script>

<template>
  <main>
    <div>简谱基本音符</div>
    <svg
    version="1.1"
    baseProfile="full"
    width="800"
    height="800"
    xmlns="http://www.w3.org/2000/svg" font-size="20px">
    <SvgJianpuBase v-for="(item, i) in jianpuSvgArr" :key="i" :jianpu="item"/>
    </svg>
  </main>
</template>
