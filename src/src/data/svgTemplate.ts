import type {
  LineType,
  PointTextType,
  PointType,
  YueQinYinBaseFixedPointType,
} from '@/types'

import yueqin from '../data/yueqin'
import utils from '@/utils'
import {pianoKeys} from '@/data/pianoKeys'

const baseSvgWidth = 400
const baseSvgHeight = 800
const svgFontSize = '20px'
const lineStroke = 'blue'
const lineWidth = 2
const circleRadius = 2
// allPoint 月琴模板的所有点位

const axisX = yueqin.axisX
const axisY = yueqin.axisY

const svgAllPoint:PointType[][] = [] 
for (let i = 0; i <   axisY.length; ++i) {
  svgAllPoint.push([] as PointType[])
  for (let j = 0; j < axisX.length; ++j) {
    svgAllPoint[i].push({ x: axisX[j], y: axisY[i] })
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
    svgXianNameText.push({ x: xianAxisX[i], y:xianTextY, offsetX, offsetY, content: `第 ${yueqin.xianNum - i} 弦` })
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


// 音

const yinAxisX =  axisX.slice(3, axisX.length-1)
const yinAxisY =  axisY.slice(3, axisY.length-1)
const yueQinYinBaseFixed = utils.getYueQinYinBaseFixed(yueqin.dingXian, yueqin.pingNum, pianoKeys)
const yueQinYinPoints: YueQinYinBaseFixedPointType[][] = []

for (let i=0; i<yinAxisY.length; ++i) {
  yueQinYinPoints.push([])
  for(let j=0; j<yinAxisX.length; ++j) {
    const tmp = yueQinYinBaseFixed[i][j];
    const point: PointType = {x: yinAxisX[j], y:yinAxisY[i]}
    yueQinYinPoints[i].push({...point, ...tmp});
  }
}

// for(let i=0; i<zy.length; ++i) {
//   yueQinSvgTemplate.SvgYueQinPingDiaoPoint.push([])
//   for (let j=0; j<zx.length; ++j) {
//     const t = yueQinCEqualTemperamentArray[i][j]
//     const point: PointType = {x: zx[j], y:zy[i]}
//     yueQinSvgTemplate.SvgYueQinPingDiaoPoint[i].push({...point, ...t.JianPu})
//   }
// }


const svgTemplate = {
  baseSvgWidth,
  baseSvgHeight,
  svgFontSize,
  lineStroke,
  lineWidth,
  circleRadius,
  yueqin,
  svgAllPoint,
  svgXianLine,
  svgXianNameText,
  svgPingLine,
  svgPingNameText,
  yueQinYinPoints
}


export  { svgTemplate }
