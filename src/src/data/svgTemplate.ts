import type {
  EqualTemperamentType,
  JianPuType,
  LineType,
  PianoKeyType,
  PointTextType,
  PointType,
  SvgYueQinTemplateDataType,
  SvgYueQinTemplateType,
  YueQinOptionsType,
  svgPointJianPuBaseType,
  svgPointPianoKeyType,
} from '@/types'
import { pianoKeys } from './pianoKeys'
import { jianPus } from './jianPus'


function mapPianoWithJianPu(
  pianoKey: PianoKeyType,
  pianoKeys: PianoKeyType[],
  jianPus: JianPuType[],
  equalTemperament: EqualTemperamentType
): JianPuType {

  const pianoEqualIdx = pianoKeys.findIndex(
    (item) => item.baseIdx === equalTemperament.pianoBaseKey.baseIdx
  )
  const pianoIdx = pianoKeys.findIndex((item) => item.baseIdx === pianoKey.baseIdx)

  const jianPuEqualIdx = jianPus.findIndex(
    (item) =>
      item.base === equalTemperament.jianPuBaseKey.base &&
      item.gao === equalTemperament.jianPuBaseKey.gao &&
      item.di === equalTemperament.jianPuBaseKey.di
  )

  let jianPuIdx = pianoIdx - pianoEqualIdx + jianPuEqualIdx
  
  if (jianPuIdx < 0) {
    jianPuIdx = 0
  } else if (jianPuIdx > jianPus.length) {
    jianPuIdx = jianPus.length - 1
  }
  return jianPus[jianPuIdx]
}


export const svgTemplate:SvgYueQinTemplateType = {
  data: {} as SvgYueQinTemplateDataType,
  yueqinOptions: {} as YueQinOptionsType,
  updateSvgTemplate: function(yueqinOptions: YueQinOptionsType) {
    this.yueqinOptions = yueqinOptions

    // 整个月琴的坐标定位， 以 4 弦 16 品为例， 应该是 (2 + 4 + 2) x (2 + 16 + 2) 
    // y 点 为 0（头）, 40（弦名） 100 (弦线起始点) 
    // x 点 为 0 （头）， 40（品名）， 100（品线起始点）
    // const axisX = [0, 20, 100, 137.5, 212.5, 287.5, 362.5, 400]
    // const axisY = [
    //     0, 40, 80, 121.875, 165.625, 209.375, 253.125, 296.875, 340.625, 384.375, 428.125, 471.875,
    //     515.625, 559.375, 603.125, 646.875, 690.625, 734.375, 778.125, 800
    //   ]

    const axisX = [0, 40]
    const axisY = [0, 60]
    // const stepX = 80
    // const stepY = 40
    const stepX = 100
    const stepY = 100

    for(let i=0; i<yueqinOptions.xianNum+2; ++i) {
      axisX.push(axisX[axisX.length - 1] + stepX)
    }
    for(let i=0; i<yueqinOptions.pingNum+2; ++i) {
      axisY.push(axisY[axisY.length - 1] + stepY)
    }
    const svgAllPoint:PointType[][] = [] 
    for (let i = 0; i < axisX.length; ++i) {
      svgAllPoint.push([] as PointType[])
      for (let j = 0; j < axisY.length; ++j) {
        svgAllPoint[i].push({ x: axisX[i], y: axisY[j] })
      }
    }

    // 弦线坐标
    const xianAxisX = axisX.slice(3, axisX.length-1)
    const xianAxisY = [axisY[2], axisY[axisY.length - 1]]
    const svgXianLine: LineType[] = []

    // 弦名
    const xianTextY = axisY[1]
    const svgXianNameText: PointTextType[] = []

    for(let i=0; i< xianAxisX.length; ++i) {
        svgXianLine.push({ x1: xianAxisX[i], y1: xianAxisY[0], x2: xianAxisX[i], y2:xianAxisY[1], })
        const offsetX = -30
        const offsetY = 0
        svgXianNameText.push({ x: xianAxisX[i], y:xianTextY, offsetX, offsetY, content: `第 ${this.yueqinOptions.xianNum - i} 弦` })
    }

    // 品线
    const pingAxisX = [axisX[2], axisX[axisX.length - 1]]
    const pingAxisY =  axisY.slice(3, axisY.length-1)
    const svgPingLine: LineType[] = []

    // 品名
    const pingTextX = axisX[1]
    const svgPingNameText: PointTextType[] = []

    for(let i=0; i<pingAxisY.length; ++i) {
      svgPingLine.push({ x1: pingAxisX[0], y1: pingAxisY[i], x2: pingAxisX[1], y2: pingAxisY[i] })
      svgPingNameText.push({ x: pingTextX, y: pingAxisY[i], content: `第 ${i+1} 品` })
    }
    
    // 音的点位
    const svgYinPoint: PointType[][] = []
    const svgYinPianoKey: svgPointPianoKeyType[][] = [] 
    const svgYinJianPu: svgPointJianPuBaseType[][] = []
    const yinAxisX =  axisX.slice(3, axisX.length-1)
    const yinAxisY =  axisY.slice(2, axisY.length-1)
    for (let i=0; i<yinAxisX.length; ++i) {
      svgYinPoint.push([])
      svgYinPianoKey.push([])
      svgYinJianPu.push([])
      for(let j=0; j<yinAxisY.length; ++j) {
        const offsetX = 10
        const offsetY = -10

          // x y 坐标
        const point = {x: yinAxisX[i], y: yinAxisY[j], offsetX, offsetY}
        svgYinPoint[i].push(point)
        // 固定音
        let baseIdx = pianoKeys.find(item => item.baseIdx === yueqinOptions.xianEmptyPianoKey[i].baseIdx)?.baseIdx
        if (!baseIdx) {
          // 如果找不到，则设置空弦为 A0
          baseIdx = pianoKeys[0].baseIdx
        }
        else {
          if (baseIdx + j > pianoKeys.length) {
            // 存在超出长度的音符，设置最高音为 C 8
            baseIdx = pianoKeys[pianoKeys.length - 1].baseIdx
          }
          else {
            baseIdx =  baseIdx + j
          }
        }  
        const pianoKey = pianoKeys.find((item) => item.baseIdx == baseIdx) as PianoKeyType
        svgYinPianoKey[i].push({point, pianoKey})
        // 对应简谱音
        const jianPu = mapPianoWithJianPu(pianoKey, pianoKeys, jianPus, yueqinOptions.equalTemperament)
        svgYinJianPu[i].push({point, jianPu})
      }
    }
    this.data.svgBaseWidth = axisX[axisX.length - 1]
    this.data.svgBaseHeight = axisY[axisY.length - 1]
    this.data.svgFontSize = '20px'
    this.data.svgLineStroke = 'blue'
    this.data.svgLineWidth = 2
    this.data.svgCircleRadius = 2
    this.data.svgAllPoint = svgAllPoint
    this.data.svgXianLine = svgXianLine
    this.data.svgXianNameText = svgXianNameText
    this.data.svgPingLine = svgPingLine,
    this.data.svgPingNameText = svgPingNameText
    this.data.svgYinPoint = svgYinPoint
    this.data.svgYinPianoKey = svgYinPianoKey
    this.data.svgYinJianPu = svgYinJianPu
  },
}