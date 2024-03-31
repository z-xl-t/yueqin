<script setup lang="ts">
import { ref, watch } from 'vue'
import equalTemperaments from '@/data/equalTemperaments'
import { QSelect, useQuasar } from 'quasar'
import SvgYueQinTemplate from '@/components/SvgYueQinTemplate.vue'
import { yueqinOptions } from '@/options/yueqinOptions'
import { svgTemplate } from '@/data/svgTemplate'
import type {
  EqualTemperamentType,
  PianoKeyType,
  SvgYueQinTemplateDataType,
  YueQinOptionsType
} from '@/types'
import { pianoKeys } from '@/data/pianoKeys'
const $q = useQuasar()

const equalTemperamentAll = ref([] as EqualTemperamentType[])
const yueOptionResetFlag = ref(false)
const options = ref({} as YueQinOptionsType)
const svgTemplateData = ref({} as SvgYueQinTemplateDataType)

yueqinOptions.initYueQinOptionsType()
equalTemperamentAll.value = equalTemperaments
options.value = yueqinOptions.data
updateSvgTemplete()

function updateOptions() {
  yueqinOptions.setDataToLocalStorage()
}

function resetOptions() {
  yueqinOptions.resetYueQinOptionsType()
  options.value = yueqinOptions.data
  yueOptionResetFlag.value = true
  updateAll()
}
function updateAll() {
  updateOptions()
  updateSvgTemplete()
}
function updateSvgTemplete() {
  const xianEmptyPianoKey = options.value.xianEmptyPianoKey
  // 要将空弦，设置成正确的 idx
  for (let i = 0; i < xianEmptyPianoKey.length; ++i) {
    const item = pianoKeys.find(
      (item) =>
        item.basePiano == xianEmptyPianoKey[i].basePiano &&
        item.current == xianEmptyPianoKey[i].current
    ) as PianoKeyType
    if (item) {
      xianEmptyPianoKey[i].baseIdx = item.baseIdx
    } else {
      // 如果超出A0-C8，而自动设置为 A0
      xianEmptyPianoKey[i].baseIdx = pianoKeys[0].baseIdx
      xianEmptyPianoKey[i].basePiano = pianoKeys[0].basePiano
      xianEmptyPianoKey[i].current = pianoKeys[0].current

      $q.notify({
        message: '超出A0-C8 范围，自动设置成A0',
        color: 'purple'
      })
    }
  }
  svgTemplate.updateSvgTemplate(options.value)
  // 这样才会触发响应式，因为整个对象都发生改变了
  svgTemplateData.value = JSON.parse(JSON.stringify(svgTemplate.data))
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

watch(
  () => ({
    pingNum: options.value.pingNum,
    equalTemperament: options.value.equalTemperament,
    xianEmptyPianoKey: options.value.xianEmptyPianoKey
  }),
  (newValue, oldValue) => {
    updateAll()
  },
  { deep: true }
)

// 只需要更新 options
watch(
  () => options.value.scale,
  (newValue, oldValue) => {
    updateOptions()
  },
  { deep: true, immediate: true }
)
</script>
<template>
  <div class="yueqin">
    <div class="options">
      <q-btn class="options-reset" color="primary" label="重置" @click="resetOptions" />
      <q-select
        class="options-select"
        filled
        v-model="options.equalTemperament"
        option-label="comment"
        :options="equalTemperamentAll"
        label="调号"
      />

      <div class="options-toggle">
        <q-toggle class="options-sharp" v-model="options.ifShowSharp" label="是否显示半音" />
        <q-toggle class="options-jianPu" v-model="options.ifShowJianPu" label="是否显示简谱音" />
        <q-toggle
          class="options-pianoKey"
          v-model="options.ifShowPianoKey"
          label="是否显示固定音"
        />
      </div>
      <div class="options-slider">
        <q-slider v-model="options.scale" :min="0" :max="2" :step="0.1" style="max-width: 200px" />
        <div class="desc">缩放: {{ options.scale }}</div>
      </div>
      <div class="options-slider">
        <q-slider v-model="options.pingNum" :min="13" :max="20" style="max-width: 200px" />
        <div class="desc">品数： {{ options.pingNum }}</div>
      </div>

      <div class="options-slider">
        <q-slider v-model="options.xianNum" :min="1" :max="6" style="max-width: 200px" />
        <div class="desc">弦数： {{ options.xianNum }}</div>
      </div>
      <div class="options-xian-empty-wrapper">
        <div class="options-xian-empty" v-for="(item, i) in options.xianEmptyPianoKey" :key="i">
          <div style="padding-right: 10px">{{ options.xianEmptyPianoKey.length - i }} 弦:</div>
          <q-input style="width: 60px" v-model="item.basePiano" />
          <q-input style="width: 60px" v-model="item.current" />
        </div>
        <div class="options-explain">说明： 采用科学音高记法。</div>
        <div class="options-explain">C4 等于钢琴中小字一组的 c1</div>
      </div>
    </div>
    <div class="render">
      <SvgYueQinTemplate :yueqinOptions="options" :svgTemplateData="svgTemplateData" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.yueqin {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.options {
  width: 400px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  .options-reset,
  .options-select,
  .options-slider,
  .options-explain {
    margin: 8px 20px;
  }

  .options-toggle {
    margin: 0px 6px;
  }
  .options-xian-empty {
    margin: 0px 20px;
  }
  .options-slider {
    width: 100%;
    height: 40px;
    display: flex;
    .desc {
      margin-left: 10px;
      width: 100px;
    }
  }
  .options-toggle {
    display: flex;
    flex-direction: column;
  }
}
.options-xian-empty-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.options-xian-empty {
  width: 40%;
  display: flex;
  align-items: center;
}
.render {
  flex: 1;
  overflow: auto;
}
</style>
