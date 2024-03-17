import type {
  PointType,
  SvgLineAttrType,
  SvgTextAttrType,
  SvgYueQinPingDiaoType
} from '@/types'

import { getYueQinEqualTemperamentArray, yueQinPingDiaoBaseFixedArray, cEqualTemperament } from '@/data/yueqin'

const baseSvgWidth = 400
const baseSvgHeight = 800
const svgFontSize = '20px'
const stroke = 'blue'
const yueQinSvgTemplate = {
  allPoint: [] as PointType[][],
  baseSvgWidth,
  baseSvgHeight,
  svgFontSize,
  stroke,
  svgXian: [] as SvgLineAttrType[],
  svgXianName: [] as SvgTextAttrType[],
  svgPing: [] as SvgLineAttrType[],
  svgPingName: [] as SvgTextAttrType[],
  SvgYueQinPingDiaoPoint: [] as SvgYueQinPingDiaoType[][]
}

// allPoint 月琴模板的所有点位

const x = [0, 100, 137.5, 212.5, 287.5, 362.5, 400]
const y = [
  0, 40, 80, 121.875, 165.625, 209.375, 253.125, 296.875, 340.625, 384.375, 428.125, 471.875,
  515.625, 559.375, 603.125, 646.875, 690.625, 734.375, 778.125, 800
]
for (let i = 0; i < y.length; ++i) {
  yueQinSvgTemplate.allPoint.push([])
  for (let j = 0; j < x.length; ++j) {
    yueQinSvgTemplate.allPoint[i].push({ x: x[j], y: y[i] })
  }
}

// 弦及第几弦 模板
const xianNum = 4
const xx = x.slice(2, x.length - 1)
const yy = [40, 80, 800]

for (let i = 0; i < xx.length; ++i) {
  const x = xx[i] - 30
  const y = yy[0]
  yueQinSvgTemplate.svgXianName.push({ x, y, content: `第 ${xianNum - i} 弦` })
  const x1 = xx[i]
  const y1 = yy[1]
  const x2 = xx[i]
  const y2 = yy[2]
  yueQinSvgTemplate.svgXian.push({ x1, y1, x2, y2, stroke })
}

// 品及第几品模板
const pingNum = 16
const xxx = [0, 100, 400]
const yyy = y.slice(3, y.length - 1)
for (let i = 0; i < yyy.length; ++i) {
  const x = xxx[0]
  const y = yyy[i]
  yueQinSvgTemplate.svgPingName.push({ x, y, content: `第 ${i + 1} 品` })
  const x1 = xxx[1]
  const y1 = yyy[i]
  const x2 = xxx[2]
  const y2 = yyy[i]
  yueQinSvgTemplate.svgPing.push({ x1, y1, x2, y2, stroke })
}

// 音 模板
const yueQinCEqualTemperamentArray = getYueQinEqualTemperamentArray(yueQinPingDiaoBaseFixedArray, cEqualTemperament)
const zx = x.slice(2, x.length - 1);
const zy = y.slice(2, y.length - 1);

for(let i=0; i<zy.length; ++i) {
  yueQinSvgTemplate.SvgYueQinPingDiaoPoint.push([])
  for (let j=0; j<zx.length; ++j) {
    const t = yueQinCEqualTemperamentArray[i][j]
    const point: PointType = {x: zx[j], y:zy[i]}
    yueQinSvgTemplate.SvgYueQinPingDiaoPoint[i].push({...point, ...t.JianPu})
  }
}

export default yueQinSvgTemplate
