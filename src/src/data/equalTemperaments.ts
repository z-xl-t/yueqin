import type { EqualTemperamentType } from '@/types'

// C 大调
const cEqualTemperament: EqualTemperamentType = {
  comment: '1=C4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 40, basePiano: 'C', current: 4 }
}

// C# 大调
const cSharpEqualTemperament: EqualTemperamentType = {
  comment: '1=C#4 bD4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 41, basePiano: 'C#', current: 4 }
}

// D 大调
const dEqualTemperament: EqualTemperamentType = {
  comment: '1=D4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 42, basePiano: 'D', current: 4 }
}

// D# bE 大调
const dSharpEqualTemperament: EqualTemperamentType = {
  comment: '1=D#4 bE4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 43, basePiano: 'D#', current: 4 }
}
// E 大调
const eEqualTemperament: EqualTemperamentType = {
  comment: '1=E4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 44, basePiano: 'E', current: 4 }
}

// F 大调
const fEqualTemperament: EqualTemperamentType = {
  comment: '1=F4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 45, basePiano: 'F', current: 4 }
}

// F# 大调
const fSharpEqualTemperament: EqualTemperamentType = {
  comment: '1=F#4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 46, basePiano: 'F#', current: 4 }
}

// G 大调
const gEqualTemperament: EqualTemperamentType = {
  comment: '1=G4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 47, basePiano: 'G', current: 4 }
}
// G# 大调
const gSharpEqualTemperament: EqualTemperamentType = {
  comment: '1=G#4 bA4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 48, basePiano: 'G#', current: 4 }
}

// A 大调
const aEqualTemperament: EqualTemperamentType = {
  comment: '1=A4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 49, basePiano: 'A', current: 4 }
}

// A# bB 大调

const aSharpEqualTemperament: EqualTemperamentType = {
  comment: '1=A#4 bB4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 50, basePiano: 'A#', current: 4 }
}

// B 大调
const bEqualTemperament: EqualTemperamentType = {
  comment: '1=B4',
  jianPuBaseKey: { base: '1', gao: 0, di: 0 },
  pianoBaseKey: { baseIdx: 51, basePiano: 'B', current: 4 }
}

const equalTemperaments = [
  cEqualTemperament,
  cSharpEqualTemperament,
  dEqualTemperament,
  dSharpEqualTemperament,
  eEqualTemperament,
  fEqualTemperament,
  fSharpEqualTemperament,
  gEqualTemperament,
  gSharpEqualTemperament,
  aEqualTemperament,
  aSharpEqualTemperament,
  bEqualTemperament
]

export default equalTemperaments
