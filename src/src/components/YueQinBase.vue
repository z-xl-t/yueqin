<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import equalTemperaments from '@/data/equalTemperaments'
import { QSelect } from 'quasar'
import SvgYueQinTemplate from '@/components/SvgYueQinTemplate.vue'
import { yueqinOptions } from '@/options/yueqinOptions'
import { svgTemplate } from '@/data/svgTemplate'
import type { SvgYueQinTemplateDataType } from '@/types'
const equalTemperamentAll = ref(equalTemperaments)
yueqinOptions.initYueQinOptionsType()
const yueOptionResetFlag = ref(false)
const options = ref(yueqinOptions.data)
const svgTempleteData = ref({} as SvgYueQinTemplateDataType)
updateSvgTemplete()

function updateOptions() {
  yueqinOptions.setDataToLocalStorage()
  updateSvgTemplete()
}
function resetOptions() {
  yueqinOptions.resetYueQinOptionsType()
  options.value = yueqinOptions.data
  yueOptionResetFlag.value = true
  updateSvgTemplete()
}

function updateSvgTemplete() {
  svgTemplate.initTemplate(options.value);
  // 这样才会触发响应式，因为整个对象都发生改变了
  svgTempleteData.value = JSON.parse(JSON.stringify(svgTemplate.data))
  console.log(svgTempleteData.value);
}

watch(
  () => options.value.xianNum,
  (newValue, oldValue) => {
    if (newValue > oldValue) {
      if (yueOptionResetFlag.value) {
        // 重置标记
        yueOptionResetFlag.value = false
        return
      }

      // 相对之前增加弦数，则默认增加 G3 弦
      for (let i = oldValue; i < newValue; ++i) {
        options.value.xianEmptyPianoKey.push({ baseIdx: 35, basePiano: 'G', current: 3 })
      }
    } else {
      // 相对之前减少弦数，就直接截取
      options.value.xianEmptyPianoKey = options.value.xianEmptyPianoKey.slice(
        0,
        options.value.xianNum
      )
    }
  }
)
</script>
<template>
  <div class="yueqin">
    <div class="options">
      <q-select
        style="width: 200px"
        filled
        v-model="options.equalTemperament"
        option-label="comment"
        :options="equalTemperamentAll"
        label="调号"
      />
      <q-slider v-model="options.xianNum" :min="1" :max="4" style="max-width: 200px" />
      <div>弦数： {{ options.xianNum }}</div>
      <q-slider v-model="options.pingNum" :min="13" :max="20" style="max-width: 200px" />
      <div>品数： {{ options.pingNum }}</div>
      <q-toggle v-model="options.ifShowSharp" label="关闭半音显示" />
      <br />

      <div class="xian-empty" v-for="(item, i) in options.xianEmptyPianoKey" :key="i">
        <div style="padding-right: 20px">第 {{ options.xianEmptyPianoKey.length - i }} 弦:</div>
        <q-input style="width: 60px" v-model="item.basePiano" />
        <q-input style="width: 60px" v-model="item.current" />
      </div>
      <div>
        <q-btn color="primary" label="更新" @click="updateOptions" />
        <q-btn color="primary" label="重置" @click="resetOptions" />
      </div>
    </div>

    <div class="render">
      <SvgYueQinTemplate :yueqinOptions="options" :svgTemplateData="svgTempleteData"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.yueqin {
  display: flex;
  width: 100vw;
  height: 100vh;
  padding-left: 20%;
  padding-top: 20px;
}
.options {
  min-width: 200px;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
}
.xian-empty {
  display: flex;

  align-items: center;
}
</style>
