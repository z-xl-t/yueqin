import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { YueQinOptions } from '@/types'

const localStorageKey = 'yueqinOptions'

export const useYueqinOptionsStore = defineStore('yueqinOptions', () => {

  const yueqinOptions = ref({} as YueQinOptions)

  function setDefaultYueQinOptions() {
    yueqinOptions.value = {
      equalTemperament: {
        comment: 'C大调',
        jianPuBaseKey: { base: '1', gao: 0, di: 0 },
        pianoBaseKey: { baseIdx: 40, basePiano: 'C', current: 4 }
      },
      ifShowSharp: false,
      xianNum: 4,
      pingNum: 16,
      xianEmptyPianoKey: [
        { baseIdx: 35, basePiano: 'G', current: 3 },
        { baseIdx: 42, basePiano: 'D', current: 4 },
        { baseIdx: 47, basePiano: 'G', current: 4 },
        { baseIdx: 54, basePiano: 'D', current: 5 }
      ]
    }
    localStorage.setItem(localStorageKey, JSON.stringify(yueqinOptions.value));
  }
  function initYueQinOptions() {
      // 尝试从 localStorage 加载数据
      const localStorageData = localStorage.getItem(localStorageKey)
      if (localStorageData) {
        yueqinOptions.value =  JSON.parse(localStorageData)
      }
      else {
         setDefaultYueQinOptions()
      }
  }
  function updateYueQinOptions() {
    localStorage.setItem(localStorageKey, JSON.stringify(yueqinOptions.value));
  }

  return {yueqinOptions, setDefaultYueQinOptions, initYueQinOptions, updateYueQinOptions}
})
