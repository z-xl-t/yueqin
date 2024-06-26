// 简谱中音符类型
export interface JianPuBaseType {
  base: string // 0-7 基本音符，及其升音， 0 为休止符，1-7 分别是 do la mi ...
  gao: number // 0 代表无，1-n ... 代表高 1-n 个八度，
  di: number // 0 代表无， 1-n ... 代表低 1-n 个八度
}

// 简谱音符的增时线，减时线和附点
export interface JianPuType extends JianPuBaseType {
  zeng?: number // 0 代表无，1-n ... 代表增加 1-n 个四分音符的时长
  jian?: number // 0 代表无，1-n ... 代表减少为四分音符的 1/(2*n) 时长
  fu?: number // 0-1 0 表示无附点，1 表示有附点， 附点为增加当前音符时值的一半
}

export interface PointType {
  x: number
  y: number
  offsetX?: number
  offsetY?: number
}

// 用来表示第几品，第几弦
export interface PointTextType extends PointType {
  content: string
}

//  用来表示简谱中的音符
export interface JianPuTextType {
  textBase: PointTextType
  textGao: PointTextType[]
  textDi: PointTextType[]
}

// 线段
export interface LineType {
  x1: number
  y1: number
  x2: number
  y2: number
}

// 钢琴按键，采用科学音高记法
// 基本音
export interface PianoKeyBaseType {
  baseIdx: number // 88 键钢琴， 序号从 1-88
  basePiano: string // 如果是黑键，需要从升降音里获取，为了方便统一设置成上一个音的升音
  current: number // 跟 basePiano 组合，例如 C + 4 为 C4 音
}

// 当前音，可能是别的音的升音或降音， 也可能是重升或重降
export interface PianoKeyType extends PianoKeyBaseType {
  sharpBase?: PianoKeyBaseType // 从哪个音升
  flatBase?: PianoKeyBaseType // 从哪个音降
  doubleSharpBase?: PianoKeyBaseType // 从哪个音重升
  doubleFlatBase?: PianoKeyBaseType // 从哪个音重降
  sharpIdx?: number // 升号 , 0 代表没有， 1 代表有
  flatIdx?: number // 降号，0 代表没有， 2 代表有
  doubleSharpIdx?: number // 0 代表没有， 3 代表有
  doubleFlatIdx?: number // 0 代表没有，4 代表有
}

// 升、降、重升、重降， 对应的符号
export interface PianoSharpOrFlatType {
  symbol: string
  idx: number
}

// 十二平均律转调，简谱和形式，
// 一般 C 就是指 C4， D 指 D4
// 1=C 1=D ...
export interface EqualTemperamentType {
  comment: string // 备注 C 大调
  jianPuBaseKey: JianPuType // 简谱首调固定为 1 0 0
  pianoBaseKey: PianoKeyType // 对应的调号 C
}

// 月琴的配置项

export interface YueQinOptionsType {
  equalTemperament: EqualTemperamentType // 1=X 简谱定调
  xianNum: number // 弦的数量 1-4
  pingNum: number // 品的数量
  xianEmptyPianoKey: PianoKeyBaseType[] // 每跟弦的空弦音
  ifShowSharp: boolean // 是否隐藏半音
  ifShowJianPu: boolean // 是否显示简谱
  ifShowPianoKey: boolean // 是否显示固定音
  scale: number // 缩放尺寸
}

export interface svgPointPianoKeyType {
  point: PointType
  pianoKey: PianoKeyType
}

export interface svgPointJianPuBaseType {
  point: PointType
  jianPu: JianPuBaseType
}

// svg-template-data
export interface SvgYueQinTemplateDataType {
  svgBaseWidth: number
  svgBaseHeight: number
  svgFontSize: string
  svgLineStroke: string
  svgLineWidth: number
  svgCircleRadius: number
  svgScale: number
  svgAllPoint: PointType[][]
  svgXianLine: LineType[]
  svgXianNameText: PointTextType[]
  svgPingLine: LineType[]
  svgPingNameText: PointTextType[]
  svgYinPoint: PointType[][]
  svgYinPianoKey: svgPointPianoKeyType[][]
  svgYinJianPu: svgPointJianPuBaseType[][]
}

export interface SvgYueQinTemplateType {
  data: SvgYueQinTemplateDataType
  yueqinOptions: YueQinOptionsType
  updateSvgTemplate: (yueqinOptions: YueQinOptionsType) => void
}
