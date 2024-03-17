<script setup lang="ts">
// import { jianPus } from '@/data/jianPus';
// import type { SvgTextAttrType, SvgTextJianPuType } from '@/types';


// let baseX = 100
// let baseY = 100

// const jianpuSvgArr:SvgTextJianPuType[] = [] 

// for(let i=0; i< jianPus.length; ++i) {
//   const item = jianPus[i]
//   const tmp = {} as SvgTextJianPuType
//   tmp.svgTextBase = {} as SvgTextAttrType
//   tmp.svgTextGao = []
//   tmp.svgTextDi = []
//   tmp.svgTextBase.x = baseX
//   tmp.svgTextBase.y = baseY
//   tmp.svgTextBase.content = `${item.ji}`
//   for(let i=0; i<item.gao; ++i) {
//     tmp.svgTextGao.push({x:baseX + 4, y: baseY - i * 8 - 20, content:'.'})
//   }
//   for(let i=0; i<item.di; ++i) {
//     tmp.svgTextDi.push({x:baseX + 4, y: baseY + i * 8 + 8, content:'.'})
//   }
  
//   jianpuSvgArr.push(tmp)

//   baseX += 100
//   if (i % 12 == 11) {
//     baseX = 100
//     baseY += 100
//   }
// }
</script>

<template>
  <main>
    <div>简谱基本音符</div>
    <svg
    version="1.1"
    baseProfile="full"
    width="600"
    height="600"
    viewBox="0 0 1200 1400"
    xmlns="http://www.w3.org/2000/svg" font-size="20px">
    </svg>
  </main>
</template>
