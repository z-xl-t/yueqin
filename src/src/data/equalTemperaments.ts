import type { EqualTemperamentType } from '@/types'

// C 大调
const cEqualTemperament: EqualTemperamentType = {
  comment: 'C大调',
  jianPuBaseKey: { ji: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 40, basePiano: 'C', current: 4 }
}

// D 大调
const dEqualTemperament: EqualTemperamentType = {
  comment: 'D大调',
  jianPuBaseKey: { ji: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 42, basePiano: 'D', current: 4 }
}

// 降E
const bEEqualTemperament: EqualTemperamentType = {
  comment: 'bE大调',
  jianPuBaseKey: { ji: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 40, basePiano: 'C', current: 4 }
}

const fEqualTemperament: EqualTemperamentType = {
  comment: 'F大调',
  jianPuBaseKey: { ji: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 40, basePiano: 'C', current: 4 }
}
const gEqualTemperament: EqualTemperamentType = {
  comment: 'G大调',
  jianPuBaseKey: { ji: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 40, basePiano: 'C', current: 4 }
}
const aEqualTemperament: EqualTemperamentType = {
  comment: 'A大调',
  jianPuBaseKey: { ji: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 40, basePiano: 'C', current: 4 }
}
const bBEqualTemperament: EqualTemperamentType = {
  comment: 'bB大调',
  jianPuBaseKey: { ji: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 40, basePiano: 'C', current: 4 }
}

const equalTemperaments = {
  cEqualTemperament,
  dEqualTemperament,
  bEEqualTemperament,
  fEqualTemperament,
  gEqualTemperament,
  aEqualTemperament,
  bBEqualTemperament
}


export  default {
  equalTemperaments,  
  cEqualTemperament,
  dEqualTemperament,
  bEEqualTemperament,
  fEqualTemperament,
  gEqualTemperament,
  aEqualTemperament,
  bBEqualTemperament
}
