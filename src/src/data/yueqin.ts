// 民乐乐琴固定定调
// 默认为 16 品
// 4弦g3， 3弦 d4， 2 弦 g4， 1弦 d5
// 月琴常用大调音阶 1=C，1=D，1=bE，1=F，1=G，1=A，1=bB
// 十二平均律推算 全全半全全全半

import type { EqualTemperamentType } from "@/types";
import { pianoKeys } from "./pianoKeys";
import { jianPus } from "./jianpu";

const cequalTemperament: EqualTemperamentType = {
    pianoKey: {basePiano: 'C', current: 4},
    jianFirst: 1,
    pianoKeys: pianoKeys,
    jianPus: jianPus,
    jianpuWithPianoKeys: []
  
}

export { cequalTemperament }

