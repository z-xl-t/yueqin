<script setup lang="ts">
import { svgTemplate } from '@/data/svgTemplate'
import type { PointType, YueQinEqualTemperamentSvgPointType, PianoKeyType } from '@/types'
import { flat } from '@/utils'
import { ref,watch } from 'vue'
import equalTemperaments from '@/data/equalTemperaments'
import { QSelect } from 'quasar'
import JianPuYinFuBase from './JianPuYinFuBase.vue'
import { useYueqinOptionsStore } from '@/stores/yueqinOptionsStore'
import { xianNum } from '@/data/yueqin'
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useYueqinOptionsStore()
const svgAllPoint: PointType[] = flat(svgTemplate.svgAllPoint)
const equalTemperamentAll = ref(equalTemperaments)
store.initYueQinOptions();

const tmpXianEmptyPianoKey = ref([] as PianoKeyType[])

tmpXianEmptyPianoKey.value=[...store.yueqinOptions.xianEmptyPianoKey];

let svgYueQinEqualTemperametArray: YueQinEqualTemperamentSvgPointType[][] = []

function updateSvgTemplete() {
  console.log('更新')
  store.updateYueQinOptions();
  // 计算 svg 整体宽高
  // 计算 各弦的 音调
  // 计算 对应的 简谱位置

  // const yueQinEqualTemperamentArray = utils.getYueQinEqualTemperamentArray(
  //   svgTemplate.yueQinYinBaseFixed,
  //   yueqinOptions.value.equalTemperament,
  //   pianoKeys,
  //   jianPus
  // )
  // svgYueQinEqualTemperametArray = utils.getSvgYueQinEqualTemperamentArray(
  //   yueQinEqualTemperamentArray,
  //   svgTemplate.yueQinYinPoints
  // )
}

function resetSvgTemplete() {
  store.setDefaultYueQinOptions();
}

watch(() => store.yueqinOptions.xianNum, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})

</script>
<template>
  <div class="yueqin">
    <div class="options">
        <q-select
          style="width: 200px"
          filled
          v-model="store.yueqinOptions.equalTemperament"
          option-label="comment"
          :options="equalTemperamentAll"
          label="调号"
        />
          <q-slider v-model="store.yueqinOptions.xianNum" :min="1" :max="4" style="max-width: 200px" />
          <div>弦数： {{ store.yueqinOptions.xianNum }}</div>
          <q-slider v-model="store.yueqinOptions.pingNum" :min="13" :max="20" style="max-width: 200px" />
          <div>品数： {{ store.yueqinOptions.pingNum }}</div>
        <q-toggle v-model="store.yueqinOptions.ifShowSharp" label="关闭半音显示" />
        <br>

        <div v-for="(item, i) in tmpXianEmptyPianoKey" :key="i">
          第 {{  tmpXianEmptyPianoKey.length - i  }} 弦: 
          <input type="text" v-model="item.basePiano">
          <input type="text" v-model="item.current">
        </div>
        <div>
          <q-btn color="primary" label="更新" @click="updateSvgTemplete" />
   
      
          <q-btn color="primary" label="重置" @click="resetSvgTemplete" /></div>
 
    </div>
    <div class="svg">

      <svg
      version="1.1"
      baseProfile="full"
      :width="svgTemplate.baseSvgWidth"
      :height="svgTemplate.baseSvgHeight"
      xmlns="http://www.w3.org/2000/svg"
      :font-size="svgTemplate.svgFontSize"
    >
      <g>
        <!-- 弦线 -->
        <line
          v-for="(item, i) in svgTemplate.svgXianLine"
          :key="i"
          :x1="item.x1"
          :y1="item.y1"
          :x2="item.x2"
          :y2="item.y2"
          :stroke="svgTemplate.lineStroke"
          :stroke-width="svgTemplate.lineWidth"
        ></line>
      </g>
      <g>
        <!-- 弦名 -->
        <text
          v-for="(item, i) in svgTemplate.svgXianNameText"
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
          v-for="(item, i) in svgTemplate.svgPingLine"
          :key="i"
          :x1="item.x1"
          :y1="item.y1"
          :x2="item.x2"
          :y2="item.y2"
          :stroke="svgTemplate.lineStroke"
          :stroke-width="svgTemplate.lineWidth"
        ></line>
      </g>
      <g>
        <!-- 品名 -->
        <text v-for="(item, i) in svgTemplate.svgPingNameText" :key="i" :x="item.x" :y="item.y">
          {{ item.content }}
        </text>
      </g>
      <g>
        <!-- 点 -->
        <circle
          v-for="(item, i) in svgAllPoint"
          :key="i"
          :cx="item.x"
          :cy="item.y"
          :r="svgTemplate.circleRadius"
        ></circle>
      </g>
      <JianPuYinFuBase :svg-yue-qin-equal-temperamet-array="svgYueQinEqualTemperametArray" />
    </svg>
    </div>
  </div>

</template>

<style scoped lang="scss">
.yueqin {
  display:  flex;
  width: 100vw;
  height: 100vh;
  padding-left: 20%;
  padding-top: 20px;
}
.options {
  margin-right: 100px;
  display: flex;
  flex-direction: column;
}
</style>
