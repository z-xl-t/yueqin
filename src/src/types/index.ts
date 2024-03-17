// 简谱中音符类型
export interface JianPuBaseType {
    ji: number, // 0-7 基本音符， 0 为休止符，1-7 分别是 do la mi ...
    gao: number, // 0 代表无，1-n ... 代表高 1-n 个八度，
    di: number, // 0 代表无， 1-n ... 代表低 1-n 个八度
}

// 简谱音符的增时线，减时线和附点
export interface JianPuType extends JianPuBaseType {
    zeng?: number // 0 代表无，1-n ... 代表增加 1-n 个四分音符的时长
    jian?: number // 0 代表无，1-n ... 代表减少为四分音符的 1/(2*n) 时长
    fu?: number, // 0-1 0 表示无附点，1 表示有附点， 附点为增加当前音符时值的一半
}

// svg 的 text 的三个基本属性
export interface SvgTextAttrType {
    x: number,
    y: number,
    content: string,
}

//  svg 的 Jianpu 数据，使用 <text> 和 <g> 标签
export interface SvgTextJianPuType {
    svgTextBase: SvgTextAttrType,
    svgTextGao: SvgTextAttrType[],
    svgTextDi: SvgTextAttrType[]
}


// svg 中 line 的五个基本属性, 用于构造 月琴 琴弦和品
export interface SvgLineAttrType {
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    stroke: string,
}

// 钢琴按键，采用科学音高记法
// 基本音
export interface PianoKeyBaseType {
    basePiano: string, // 如果为空，说明是黑键，应该从 PianoKey 中获取升音或降音
    current: number  // 4
}

// 当前音，可能是别的音的升音或降音， 也可能是重升或重降
// 
export interface PianoKeyType extends PianoKeyBaseType {
    sharpBase?: PianoKeyBaseType, // 从哪个音升
    flatBase?: PianoKeyBaseType, // 从哪个音降
    doubleSharpBase?: PianoKeyBaseType, // 从哪个音重升
    doubleFlatBase?: PianoKeyBaseType, // 从哪个音重降
    sharpIdx?: number, // 升号 , 0 代表没有， 1 代表有
    flatIdx?: number, // 降号，0 代表没有， 2 代表有
    doubleSharpIdx?: number, // 0 代表没有， 3 代表有
    doubleFlatIdx?: number // 0 代表没有，4 代表有
}

// 升、降、重升、重降， 对应的符号
export interface PianoSharpOrFlatType {
    symbol: string,
    idx: number
}

export interface JianPuWidthPianoKeyType {
    pianoKey: PianoKeyType,
    jianpu: JianPuType
}

// 十二平均律转调，简谱和形式，
// 1=C 1=D ...
export interface EqualTemperamentType{
    pianoFixed: PianoKeyType, 
    jianFixed: number,    // 简谱首调固定为 1= 
    pianoKeys: PianoKeyType[],
    jianPus: JianPuType[],
    jianpuWithPianoKeys: JianPuWidthPianoKeyType[]
}

// 民乐月琴点位
export interface YueQinPingDiaoBaseType {
    xianIdx: number // 1, 2 ... 对应 1,2,... 弦
    pingIdx:  number // 1,2 ... 对应 1,2,.. 品
    pianoKey: PianoKeyType // 每个位置都有固定音高
}

// 民乐月琴的各品各弦的位置，对应的钢琴按键和简谱号
export interface YueQinPingDiaoType extends JianPuWidthPianoKeyType {
    yueQinPingDiao: YueQinPingDiaoBaseType
}

// 对应的 svg 坐标
// 此数据，包含 svg 点位，月琴点位 以及 简谱和钢琴点位

export interface SvgYueQinPingDiaoType extends YueQinPingDiaoType {
    svgYueQinPingDiao: SvgTextJianPuType
}