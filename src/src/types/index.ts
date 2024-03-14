// 简谱中音符类型
export interface YinFuBaseType {
    ji: number, // 0-7 基本音符， 0 为休止符，1-7 分别是 do la mi ...
    gao: number, // 0 代表无，1-n ... 代表高 1-n 个八度，
    di: number, // 0 代表无， 1-n ... 代表低 1-n 个八度
}

// 简谱音符的增时线，减时线和附点
export interface YinFuType extends YinFuBaseType {
    zeng: number // 0 代表无，1-n ... 代表增加 1-n 个四分音符的时长
    jian: number // 0 代表无，1-n ... 代表减少为四分音符的 1/(2*n) 时长
    fu: number, // 0-1 0 表示无附点，1 表示有附点， 附点为增加当前音符时值的一半
}

// svg 的基本属性
export interface SvgAttrType{
    width: number,
    height: number,
    viewBox: string,
    fontSize: string
}

// svg 的 text 的三个基本属性
export interface SvgTextAttrType {
    x: number,
    y: number,
    content: string
}