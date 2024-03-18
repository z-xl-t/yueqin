import type { PianoKeyType } from "@/types";

// 月琴定调 g3,d4,g4,d5
export const dingXian: PianoKeyType[] = [
  { baseIdx: 35, basePiano: 'G', current: 3 },
  { baseIdx: 42, basePiano: 'D', current: 4 },
  { baseIdx: 47, basePiano: 'G', current: 4 },
  { baseIdx: 54, basePiano: 'D', current: 5 }
]
// 四弦，16品
export const xianNum = 4
export const pingNum = 16

// 整个月琴的坐标定位， 以 4 弦 16 品为例， 应该是 8 x 20 
// y 点 为 0（头）, 40（弦名） 80 (弦线起始点) 800（弦线结束点）
// x 点 为 0 （头）， 20（品名）， 100（品线起始点）， 400（品线结束点）
const axisX = [0, 20, 100, 137.5, 212.5, 287.5, 362.5, 400]
const axisY = [
  0, 40, 80, 121.875, 165.625, 209.375, 253.125, 296.875, 340.625, 384.375, 428.125, 471.875,
  515.625, 559.375, 603.125, 646.875, 690.625, 734.375, 778.125, 800
]


const yueqin = {
  dingXian,
  xianNum,
  pingNum,
  axisX,
  axisY
}

export default yueqin

