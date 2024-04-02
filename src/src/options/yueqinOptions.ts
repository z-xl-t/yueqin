import type { YueQinOptionsType } from '@/types'

export const yueqinOptions = {
  localStorageKey: 'yueqinOptions',
  data: {} as YueQinOptionsType,

  setDefaultYueQinOptionsType: function () {
    this.data = {
      equalTemperament: {
        comment: '1=C4',
        jianPuBaseKey: { base: '1', gao: 0, di: 0 },
        pianoBaseKey: { baseIdx: 40, basePiano: 'C', current: 4 }
      },
      ifShowSharp: true,
      ifShowJianPu: true,
      ifShowPianoKey: true,
      scale: 1,
      xianNum: 4,
      pingNum: 16,
      xianEmptyPianoKey: [
        { baseIdx: 35, basePiano: 'G', current: 3 },
        { baseIdx: 42, basePiano: 'D', current: 4 },
        { baseIdx: 47, basePiano: 'G', current: 4 },
        { baseIdx: 54, basePiano: 'D', current: 5 }
      ]
    }
  },
  initYueQinOptionsType: function () {
    // 尝试从 localStorage 加载数据
    const localStorageData = this.getDataFromLocalStorage()
    if (localStorageData) {
      this.data = JSON.parse(localStorageData)
    } else {
      this.setDefaultYueQinOptionsType()
      this.setDataToLocalStorage()
    }
  },
  getDataFromLocalStorage: function () {
    return localStorage.getItem(this.localStorageKey)
  },
  setDataToLocalStorage: function () {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.data))
  },
  resetYueQinOptionsType: function () {
    this.setDefaultYueQinOptionsType()
    this.setDataToLocalStorage()
  }
}
