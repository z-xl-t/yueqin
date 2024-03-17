// 民乐乐琴固定定调 4弦g3， 3弦 d4， 2 弦 g4， 1弦 d5
// 默认为 16 品
// 月琴常用大调音阶 1=C，1=D，1=bE，1=F，1=G，1=A，1=bB
// 十二平均律推算 全全半全全全半
import type {
  EqualTemperamentType,
  JianPuArrayType,
  PianoKeyType,
  YueQinEqualTemperamentType,
  YueQinPingDiaoBaseFixedType
} from '@/types'
import { pianoKeys } from './pianoKeys'
import { jianPus } from './jianPus'

const yueQinPingDiaoBaseFixedArray: YueQinPingDiaoBaseFixedType[][] = getYueQinPingDiaoBaseFixed()

function getYueQinPingDiaoBaseFixed() {
  const tmp: YueQinPingDiaoBaseFixedType[][] = []
  // g3 d4, g4 d5
  const xianPiano: PianoKeyType[] = [
    { baseIdx: 35, basePiano: 'G', current: 3 },
    { baseIdx: 42, basePiano: 'D', current: 4 },
    { baseIdx: 47, basePiano: 'G', current: 4 },
    { baseIdx: 54, basePiano: 'D', current: 5 }
  ]
  const pingNum = 16
  for (let i = 0; i < pingNum + 1; ++i) {
    tmp.push([])
    for (let j = 0; j < xianPiano.length; ++j) {
      const item = pianoKeys.find(
        (item) => item.baseIdx == xianPiano[j].baseIdx + i
      ) as PianoKeyType
      tmp[i].push({ xianIdx: xianPiano.length - j, pingIdx: i, pianoKey: item })
    }
  }
  return tmp
}
const cEqualTemperament: EqualTemperamentType = {
  jianPuBaseKey: { ji: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 40, basePiano: 'C', current: 4 }
}

function getYueQinEqualTemperamentArray(
  yueQinPingDiaoBaseFixedArray: YueQinPingDiaoBaseFixedType[][],
  equalTemperament: EqualTemperamentType
): YueQinEqualTemperamentType[][] {
  const tmp: YueQinEqualTemperamentType[][] = []

  // 月琴与钢琴映射， 已完成，从 yueQinPingDiaoBaseFixedArray 获取数据
  // 钢琴与简谱移调映射 使用 cEqualTemperament 、pianoKeys、jianPus、 完成
  // 月琴与简谱之间的关系
  for (let i = 0; i < yueQinPingDiaoBaseFixedArray.length; ++i) {
    tmp.push([])
    for (let j = 0; j < yueQinPingDiaoBaseFixedArray[i].length; ++j) {
      const item = yueQinPingDiaoBaseFixedArray[i][j]
      const x = mapPianoWithJianPu(item, pianoKeys, jianPus, equalTemperament)
      tmp[i].push(x)
    }
  }
  return tmp
}

function mapPianoWithJianPu(
  yueqin: YueQinPingDiaoBaseFixedType,
  pianoKeys: PianoKeyType[],
  jianPus: JianPuArrayType,
  equalTemperament: EqualTemperamentType
): YueQinEqualTemperamentType {
  const tmp = {} as YueQinEqualTemperamentType

  tmp.jianPuBaseKey = equalTemperament.jianPuBaseKey
  tmp.pianoBaseKey = equalTemperament.pianoBaseKey
  tmp.yueQinFixed = yueqin

  const pianoBaseIdx = pianoKeys.findIndex(
    (item) => item.baseIdx === equalTemperament.pianoBaseKey.baseIdx
  )
  const pianoIdx = pianoKeys.findIndex((item) => item.baseIdx === yueqin.pianoKey.baseIdx)
  const jianPuBaseIdx = jianPus.findIndex(
    (item) =>
      item.ji === equalTemperament.jianPuBaseKey.ji &&
      item.gao === equalTemperament.jianPuBaseKey.gao &&
      item.di === equalTemperament.jianPuBaseKey.di
  )
  tmp.JianPu = jianPus[pianoIdx - pianoBaseIdx + jianPuBaseIdx]
  return tmp
}

export { yueQinPingDiaoBaseFixedArray, cEqualTemperament, getYueQinEqualTemperamentArray }
