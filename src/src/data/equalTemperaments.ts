import type { EqualTemperamentType } from '@/types'

// C 大调
const cEqualTemperament: EqualTemperamentType = {
  comment: 'C大调 C4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 40, basePiano: 'C', current: 4 }
}
 
// D 大调
const dEqualTemperament: EqualTemperamentType = {
  comment: 'D大调 D4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 42, basePiano: 'D', current: 4 }
}

// 降E
const bEEqualTemperament: EqualTemperamentType = {
  comment: 'bE大调 D#4 bE4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 43, basePiano: 'D#', current: 4}
}

const fEqualTemperament: EqualTemperamentType = {
  comment: 'F大调 F4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 45, basePiano: 'F', current: 4 }
}
const gEqualTemperament: EqualTemperamentType = {
  comment: 'G大调 G4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 47, basePiano: 'G', current: 4 }
}
const aEqualTemperament: EqualTemperamentType = {
  comment: 'A大调 A4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 49, basePiano: 'A', current: 4 }
}
const bBEqualTemperament: EqualTemperamentType = {
  comment: 'bB大调 A#4 bB4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 50, basePiano: 'A#', current: 4}
}

const equalTemperaments = [

  cEqualTemperament,
  dEqualTemperament,
  bEEqualTemperament,
  fEqualTemperament,
  gEqualTemperament,
  aEqualTemperament,
  bBEqualTemperament
]


export  default equalTemperaments
