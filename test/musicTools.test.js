// sum.test.js
import {
  expect,
  test,
} from 'vitest'

import {
  getMajorChord,
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

test('adds 1 + 2 to equal 3', () => {
  expect(getMajorChord(0)).toBe('C Major -> C, E, G')
})
