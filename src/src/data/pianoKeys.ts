// 采用科学音高记法， A4=440Hz 为标准音
import type { PianoKeyType, PianoSharpOrFlatType } from '@/types'

const pianoKeys: PianoKeyType[] = [
  { baseIdx: 1, basePiano: 'A', current: 0 },
  {
    baseIdx: 2,
    basePiano: 'A#',
    current: 0,
    sharpBase: { baseIdx: 1, basePiano: 'A', current: 0 },
    sharpIdx: 1
  },
  { baseIdx: 3, basePiano: 'B', current: 0 },

  { baseIdx: 4, basePiano: 'C', current: 1 },
  {
    baseIdx: 5,
    basePiano: 'C#',
    current: 1,
    sharpBase: { baseIdx: 4, basePiano: 'C', current: 1 },
    sharpIdx: 1
  },
  { baseIdx: 6, basePiano: 'D', current: 1 },
  {
    baseIdx: 7,
    basePiano: 'D#',
    current: 1,
    sharpBase: { baseIdx: 6, basePiano: 'D', current: 1 },
    sharpIdx: 1
  },
  { baseIdx: 8, basePiano: 'E', current: 1 },
  { baseIdx: 9, basePiano: 'F', current: 1 },
  {
    baseIdx: 10,
    basePiano: 'F#',
    current: 1,
    sharpBase: { baseIdx: 9, basePiano: 'F', current: 1 },
    sharpIdx: 1
  },
  { baseIdx: 11, basePiano: 'G', current: 1 },
  {
    baseIdx: 12,
    basePiano: 'G#',
    current: 1,
    sharpBase: { baseIdx: 11, basePiano: 'G', current: 1 },
    sharpIdx: 1
  },
  { baseIdx: 13, basePiano: 'A', current: 1 },
  {
    baseIdx: 14,
    basePiano: 'A#',
    current: 1,
    sharpBase: { baseIdx: 13, basePiano: 'A', current: 1 },
    sharpIdx: 1
  },
  { baseIdx: 15, basePiano: 'B', current: 1 },

  { baseIdx: 16, basePiano: 'C', current: 2 },
  {
    baseIdx: 17,
    basePiano: 'C#',
    current: 2,
    sharpBase: { baseIdx: 16, basePiano: 'C', current: 2 },
    sharpIdx: 1
  },
  { baseIdx: 18, basePiano: 'D', current: 2 },
  {
    baseIdx: 19,
    basePiano: 'D#',
    current: 2,
    sharpBase: { baseIdx: 18, basePiano: 'D', current: 2 },
    sharpIdx: 1
  },
  { baseIdx: 20, basePiano: 'E', current: 2 },
  { baseIdx: 21, basePiano: 'F', current: 2 },
  {
    baseIdx: 22,
    basePiano: 'F#',
    current: 2,
    sharpBase: { baseIdx: 21, basePiano: 'F', current: 2 },
    sharpIdx: 1
  },
  { baseIdx: 23, basePiano: 'G', current: 2 },
  {
    baseIdx: 24,
    basePiano: 'G#',
    current: 2,
    sharpBase: { baseIdx: 23, basePiano: 'G', current: 2 },
    sharpIdx: 1
  },
  { baseIdx: 25, basePiano: 'A', current: 2 },
  {
    baseIdx: 26,
    basePiano: 'A#',
    current: 2,
    sharpBase: { baseIdx: 25, basePiano: 'A', current: 2 },
    sharpIdx: 1
  },
  { baseIdx: 27, basePiano: 'B', current: 2 },

  { baseIdx: 28, basePiano: 'C', current: 3 },
  {
    baseIdx: 29,
    basePiano: 'C#',
    current: 3,
    sharpBase: { baseIdx: 28, basePiano: 'C', current: 3 },
    sharpIdx: 1
  },
  { baseIdx: 30, basePiano: 'D', current: 3 },
  {
    baseIdx: 31,
    basePiano: 'D#',
    current: 3,
    sharpBase: { baseIdx: 30, basePiano: 'D', current: 3 },
    sharpIdx: 1
  },
  { baseIdx: 32, basePiano: 'E', current: 3 },
  { baseIdx: 33, basePiano: 'F', current: 3 },
  {
    baseIdx: 34,
    basePiano: 'F#',
    current: 3,
    sharpBase: { baseIdx: 33, basePiano: 'F', current: 3 },
    sharpIdx: 1
  },
  { baseIdx: 35, basePiano: 'G', current: 3 },
  {
    baseIdx: 36,
    basePiano: 'G#',
    current: 3,
    sharpBase: { baseIdx: 35, basePiano: 'G', current: 3 },
    sharpIdx: 1
  },
  { baseIdx: 37, basePiano: 'A', current: 3 },
  {
    baseIdx: 38,
    basePiano: 'A#',
    current: 3,
    sharpBase: { baseIdx: 37, basePiano: 'A', current: 3 },
    sharpIdx: 1
  },
  { baseIdx: 39, basePiano: 'B', current: 3 },

  { baseIdx: 40, basePiano: 'C', current: 4 },
  {
    baseIdx: 41,
    basePiano: 'C#',
    current: 4,
    sharpBase: { baseIdx: 40, basePiano: 'C', current: 4 },
    sharpIdx: 1
  },
  { baseIdx: 42, basePiano: 'D', current: 4 },
  {
    baseIdx: 43,
    basePiano: 'D#',
    current: 4,
    sharpBase: { baseIdx: 42, basePiano: 'D', current: 4 },
    sharpIdx: 1
  },
  { baseIdx: 44, basePiano: 'E', current: 4 },
  { baseIdx: 45, basePiano: 'F', current: 4 },
  {
    baseIdx: 46,
    basePiano: 'F#',
    current: 4,
    sharpBase: { baseIdx: 45, basePiano: 'F', current: 4 },
    sharpIdx: 1
  },
  { baseIdx: 47, basePiano: 'G', current: 4 },
  {
    baseIdx: 48,
    basePiano: 'G#',
    current: 4,
    sharpBase: { baseIdx: 47, basePiano: 'G', current: 4 },
    sharpIdx: 1
  },
  { baseIdx: 49, basePiano: 'A', current: 4 },
  {
    baseIdx: 50,
    basePiano: 'A#',
    current: 4,
    sharpBase: { baseIdx: 49, basePiano: 'A', current: 4 },
    sharpIdx: 1
  },
  { baseIdx: 51, basePiano: 'B', current: 4 },

  { baseIdx: 52, basePiano: 'C', current: 5 },
  {
    baseIdx: 53,
    basePiano: 'C#',
    current: 5,
    sharpBase: { baseIdx: 52, basePiano: 'C', current: 5 },
    sharpIdx: 1
  },
  { baseIdx: 54, basePiano: 'D', current: 5 },
  {
    baseIdx: 55,
    basePiano: 'D#',
    current: 5,
    sharpBase: { baseIdx: 54, basePiano: 'D', current: 5 },
    sharpIdx: 1
  },
  { baseIdx: 56, basePiano: 'E', current: 5 },
  { baseIdx: 57, basePiano: 'F', current: 5 },
  {
    baseIdx: 58,
    basePiano: 'F#',
    current: 5,
    sharpBase: { baseIdx: 57, basePiano: 'F', current: 5 },
    sharpIdx: 1
  },
  { baseIdx: 59, basePiano: 'G', current: 5 },
  {
    baseIdx: 60,
    basePiano: 'G#',
    current: 5,
    sharpBase: { baseIdx: 59, basePiano: 'G', current: 5 },
    sharpIdx: 1
  },
  { baseIdx: 61, basePiano: 'A', current: 5 },
  {
    baseIdx: 62,
    basePiano: 'A#',
    current: 5,
    sharpBase: { baseIdx: 61, basePiano: 'A', current: 5 },
    sharpIdx: 1
  },
  { baseIdx: 63, basePiano: 'B', current: 5 },

  { baseIdx: 64, basePiano: 'C', current: 6 },
  {
    baseIdx: 65,
    basePiano: 'C#',
    current: 6,
    sharpBase: { baseIdx: 64, basePiano: 'C', current: 6 },
    sharpIdx: 1
  },
  { baseIdx: 66, basePiano: 'D', current: 6 },
  {
    baseIdx: 67,
    basePiano: 'D#',
    current: 6,
    sharpBase: { baseIdx: 66, basePiano: 'D', current: 6 },
    sharpIdx: 1
  },
  { baseIdx: 68, basePiano: 'E', current: 6 },
  { baseIdx: 69, basePiano: 'F', current: 6 },
  {
    baseIdx: 70,
    basePiano: 'F#',
    current: 6,
    sharpBase: { baseIdx: 69, basePiano: 'F', current: 6 },
    sharpIdx: 1
  },
  { baseIdx: 71, basePiano: 'G', current: 6 },
  {
    baseIdx: 72,
    basePiano: 'G#',
    current: 6,
    sharpBase: { baseIdx: 71, basePiano: 'G', current: 6 },
    sharpIdx: 1
  },
  { baseIdx: 73, basePiano: 'A', current: 6 },
  {
    baseIdx: 74,
    basePiano: 'A#',
    current: 6,
    sharpBase: { baseIdx: 73, basePiano: 'A', current: 6 },
    sharpIdx: 1
  },
  { baseIdx: 75, basePiano: 'B', current: 6 },

  { baseIdx: 76, basePiano: 'C', current: 7 },
  {
    baseIdx: 77,
    basePiano: 'C#',
    current: 7,
    sharpBase: { baseIdx: 76, basePiano: 'C', current: 7 },
    sharpIdx: 1
  },
  { baseIdx: 78, basePiano: 'D', current: 7 },
  {
    baseIdx: 79,
    basePiano: 'D#',
    current: 7,
    sharpBase: { baseIdx: 78, basePiano: 'D', current: 7 },
    sharpIdx: 1
  },
  { baseIdx: 80, basePiano: 'E', current: 7 },
  { baseIdx: 81, basePiano: 'F', current: 7 },
  {
    baseIdx: 82,
    basePiano: 'F#',
    current: 7,
    sharpBase: { baseIdx: 81, basePiano: 'F', current: 7 },
    sharpIdx: 1
  },
  { baseIdx: 83, basePiano: 'G', current: 7 },
  {
    baseIdx: 84,
    basePiano: 'G#',
    current: 7,
    sharpBase: { baseIdx: 83, basePiano: 'G', current: 7 },
    sharpIdx: 1
  },
  { baseIdx: 85, basePiano: 'A', current: 7 },
  {
    baseIdx: 86,
    basePiano: 'A#',
    current: 7,
    sharpBase: { baseIdx: 85, basePiano: 'A', current: 7 },
    sharpIdx: 1
  },
  { baseIdx: 87, basePiano: 'B', current: 7 },

  { baseIdx: 88, basePiano: 'C', current: 8 }
]

//0 无 1 升，2 降，3 重升，4 重降
const pianoSharpOrFlatArray: PianoSharpOrFlatType[] = [
  { symbol: '', idx: 0 },
  { symbol: '#', idx: 1 },
  { symbol: '𝄪', idx: 2 },
  { symbol: '𝄫', idx: 3 }
]
export { pianoKeys, pianoSharpOrFlatArray }
