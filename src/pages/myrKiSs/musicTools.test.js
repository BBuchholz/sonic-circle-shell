// sum.test.js
import { expect, test } from 'vitest'
import { getMajorChord } from './musicTools'

test('adds 1 + 2 to equal 3', () => {
  expect(getMajorChord(0)).toBe(3)
})
