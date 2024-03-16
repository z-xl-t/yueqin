import type {  SvgLineAttrType, SvgTextAttrType } from '@/types';
const baseSvgWidth=400
const baseSvgHeight=800
const svgFontSize="20px"
const stroke = "blue"
const yueQinTemplate = {
  baseSvgWidth,
  baseSvgHeight,
  svgFontSize,
  stroke,
  xian: [] as SvgLineAttrType[],
  xianName: [] as SvgTextAttrType[],
  ping: [] as SvgLineAttrType[],
  pingName: [] as SvgTextAttrType[],
  allPoint: [] as SvgTextAttrType[][],
  yinfuPoint: [] as SvgTextAttrType[][]
}
const xianNum = 4;
const x = [0, 100, 137.5,212.5,287.5,362.5,400]
const y = [0, 40, 80, 121.875, 165.625,209.375,253.125,
        296.875,340.625,384.375,428.125,471.875,
        515.625,559.375,603.125,646.875,690.625,
        734.375 ,778.125,800]

for(let i=0; i< y.length; ++i) {
  yueQinTemplate.allPoint.push([] as SvgTextAttrType[])
  for (let j=0; j < x.length; ++j) {
    yueQinTemplate.allPoint[i].push({x: x[j], y: y[i], content: `${i}${j}`})
  }
}
let newItem = [...yueQinTemplate.allPoint]
newItem = newItem.slice(2,newItem.length - 1)
newItem.forEach(item => {
  const subItem = [...item];
  yueQinTemplate.yinfuPoint.push(subItem.slice(2,subItem.length - 1))
});


const xx = x.slice(2,x.length-1)
const yy = [40, 80, 800]

for(let i=0; i<xx.length; ++i) {
  const x = xx[i] - 30
  const y = yy[0]
  yueQinTemplate.xianName.push({x, y, content: `第 ${xianNum - i} 弦`})
  const x1 = xx[i]
  const y1 = yy[1]
  const x2 = xx[i]
  const y2 = yy[2]
  yueQinTemplate.xian.push({x1, y1, x2,y2, stroke})
}

const pingNum = 16;
const xxx = [0, 100, 400]
const yyy = y.slice(3,y.length-1)
for (let i=0; i<yyy.length; ++i) {
  const x = xxx[0]
  const y = yyy[i]
  yueQinTemplate.pingName.push( {x,y, content: `第 ${pingNum - i} 品`})
  const x1 = xxx[1]
  const y1 = yyy[i]
  const x2 = xxx[2]
  const y2 = yyy[i]
  yueQinTemplate.ping.push({x1, y1,x2,y2, stroke})
}
export default yueQinTemplate;
