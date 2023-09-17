// sum.test.js
import {
  expect,
  test,
} from 'vitest'

import {
  getAugmentedChord,
  getDiminishedChord,
  getMajorChord,
  getMajorChordAsObj,
  getMinorChord,
  getNoteName,
} from '../src/pages/myrKiSs/musicTools'

test('gets note name for various notes', () => {
  expect(getNoteName(-1)).toBe('B')
  expect(getNoteName(0)).toBe('C')
  expect(getNoteName(1)).toBe('C#/Db')
  expect(getNoteName(2)).toBe('D')
  expect(getNoteName(3)).toBe('D#/Eb')
  expect(getNoteName(4)).toBe('E')
  expect(getNoteName(5)).toBe('F')
  expect(getNoteName(6)).toBe('F#/Gb')
  expect(getNoteName(7)).toBe('G')
  expect(getNoteName(8)).toBe('G#/Ab')
  expect(getNoteName(9)).toBe('A')
  expect(getNoteName(10)).toBe('A#/Bb')
  expect(getNoteName(11)).toBe('B')
  expect(getNoteName(12)).toBe('C')
})

test('gets Major Chords from root note', () => {
  expect(getMajorChord(0)).toBe('C Major -> C, E, G')
  expect(getMajorChord(2)).toBe('D Major -> D, F#/Gb, A')
  expect(getMajorChord(12)).toBe('C Major -> C, E, G')
  expect(getMajorChord(-1)).toBe('B Major -> B, D#/Eb, F#/Gb')
})

test('gets Minor Chords from root note', () => {
  expect(getMinorChord(0)).toBe('C Minor -> C, D#/Eb, G')
  expect(getMinorChord(2)).toBe('D Minor -> D, F, A')
  expect(getMinorChord(12)).toBe('C Minor -> C, D#/Eb, G')
  expect(getMinorChord(-1)).toBe('B Minor -> B, D, F#/Gb')
})

test('gets Augmented Chords from root note', () => {
  expect(getAugmentedChord(0)).toBe('C Augmented -> C, E, G#/Ab')
  expect(getAugmentedChord(2)).toBe('D Augmented -> D, F#/Gb, A#/Bb')
  expect(getAugmentedChord(12)).toBe('C Augmented -> C, E, G#/Ab')
  expect(getAugmentedChord(-1)).toBe('B Augmented -> B, D#/Eb, G')
})

test('gets Diminished Chords from root note', () => {
  expect(getDiminishedChord(0)).toBe('C Diminished -> C, D#/Eb, F#/Gb')
  expect(getDiminishedChord(2)).toBe('D Diminished -> D, F, G#/Ab')
  expect(getDiminishedChord(12)).toBe('C Diminished -> C, D#/Eb, F#/Gb')
  expect(getDiminishedChord(-1)).toBe('B Diminished -> B, D, F')
  expect(getDiminishedChord(7)).toBe('G Diminished -> G, A#/Bb, C#/Db')
})

test('has both text and object return versions to get chords', () => {
  expect(getMajorChordAsObj(0).pattern).toStrictEqual([0, 4, 7])
  expect(getMajorChordAsObj(1).pattern).toStrictEqual([1, 5, 8])
  expect(getMajorChordAsObj(12).pattern).toStrictEqual([12, 16, 19])
})
