// sum.test.js
import { expect, test } from 'vitest'
import { getMajorChord } from '../src/pages/myrKiSs/musicTools'

test('adds 1 + 2 to equal 3', () => {
  expect(getMajorChord(0)).toBe('C Major -> C, E, G')
})
