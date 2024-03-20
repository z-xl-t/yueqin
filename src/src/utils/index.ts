import type {
  EqualTemperamentType,
  JianPuType,
  PianoKeyType,
  PointType,
  YueQinEqualTemperamentSvgPointType,
  YueQinEqualTemperamentType,
  YueQinYinBaseFixedPointType,
  YueQinYinBaseFixedType
} from '@/types'

// 只能拍平一层数组 [[1,2], [3,4]] => [1,2,3,4]
export function flat(arr: any[]): any[] {
  if (Object.prototype.toString.call(arr) != '[object Array]') {
    return []
  }
  const res = [] as any[]
  arr.map((item) => {
    if (item instanceof Array) {
      res.push(...item) //展开数组[11,12] 为11,12
    } else {
      res.push(item)
    }
  })
  return res
}


// 民乐乐琴固定定调 4弦g3， 3弦 d4， 2 弦 g4， 1弦 d5
// 默认为 16 品
// 月琴常用大调音阶 1=C，1=D，1=bE，1=F，1=G，1=A，1=bB
// 十二平均律推算 全全半全全全半

function getYueQinYinBaseFixed(
    dingxian: PianoKeyType[],
    pingNum: number,
    pianoKeys: PianoKeyType[]
  ): YueQinYinBaseFixedType[][] {
    const tmp: YueQinYinBaseFixedType[][] = []
  
    for (let i = 0; i < pingNum + 1; ++i) {
      tmp.push([])
      for (let j = 0; j < dingxian.length; ++j) {
        const item = pianoKeys.find((item) => item.baseIdx == dingxian[j].baseIdx + i) as PianoKeyType
        tmp[i].push({ xianIdx: dingxian.length - j, pingIdx: i, pianoKey: item })
      }
    }
    return tmp
  }
  
  function getYueQinEqualTemperamentArray(
    yueQinPingDiaoBaseFixedArray: YueQinYinBaseFixedType[][],
    equalTemperament: EqualTemperamentType,
    pianoKeys: PianoKeyType[],
    jianPus: JianPuType[]
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

  function getSvgYueQinEqualTemperamentArray (yueQinEqualTemperamentArray:YueQinEqualTemperamentType[][], svgPoints: PointType[][]): YueQinEqualTemperamentSvgPointType[][] {
    const tmp: YueQinEqualTemperamentSvgPointType[][] = []
    for(let i=0; i<svgPoints.length; ++i) {
      tmp.push([] as YueQinEqualTemperamentSvgPointType[])
      for (let j=0; j<svgPoints[j].length; ++j) {
        const x = svgPoints[i][j].x
        const y = svgPoints[i][j].y
        const offsetX = 10
        const offsetY = -10
        const yueQinFixed = yueQinEqualTemperamentArray[i][j].yueQinFixed
        const jianPu = yueQinEqualTemperamentArray[i][j].jianPu
        tmp[i].push({x,y,offsetX,offsetY, yueQinFixed, jianPu })
      }
    }
    return tmp

  }
  
  function mapPianoWithJianPu(
    yueqin: YueQinYinBaseFixedType,
    pianoKeys: PianoKeyType[],
    jianPus: JianPuType[],
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
        item.base === equalTemperament.jianPuBaseKey.base &&
        item.gao === equalTemperament.jianPuBaseKey.gao &&
        item.di === equalTemperament.jianPuBaseKey.di
    )
    tmp.jianPu = jianPus[pianoIdx - pianoBaseIdx + jianPuBaseIdx]
    return tmp
  }
  
  const utils = {
    flat,
    getYueQinYinBaseFixed,
    getYueQinEqualTemperamentArray,
    mapPianoWithJianPu,
    getSvgYueQinEqualTemperamentArray
  }
export default utils