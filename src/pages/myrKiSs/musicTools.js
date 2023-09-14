export function getNoteName(noteValue) {
  let name = 'NOTENAME'

  let coaxedValue = noteValue

  while (coaxedValue < 0)
    coaxedValue += 12

  while (coaxedValue > 11)
    coaxedValue -= 12

  switch (coaxedValue) {
    case 0:
      name = 'C'
      break
    case 1:
      name = 'C#/Db'
      break
    case 2:
      name = 'D'
      break
    case 3:
      name = 'D#/Eb'
      break
    case 4:
      name = 'E'
      break
    case 5:
      name = 'F'
      break
    case 6:
      name = 'F#/Gb'
      break
    case 7:
      name = 'G'
      break
    case 8:
      name = 'G#/Ab'
      break
    case 9:
      name = 'A'
      break
    case 10:
      name = 'A#/Bb'
      break
    case 11:
      name = 'B'
      break
    default:
      name = '?'
  }

  return name
}
export function getDiminishedChord(rootNote) {
  return `${rootNote} Diminished`
}
export function getAugmentedChord(rootNote) {
  return `${rootNote} Augmented`
}
export function getMajorChord(rootNote) {
  const pattern = [0, 4, 7]
  const chord = []

  for (const patternStep of pattern)
    chord.push(getNoteName(patternStep + rootNote))

  let output = `${getNoteName(rootNote)} Major -> `

  output += ''

  return output
}
export function getMinorChord(rootNote) {
  return `${rootNote} Minor`
}
