<script setup>
import { ref } from 'vue'
import {
  getAugmentedChordAsObj,
  getDiminishedChordAsObj,
  getMajorChordAsObj,
  getMinorChordAsObj,
} from './musicTools'

import KeyBoard from '~/components/KeyBoard.vue'

const selectedRoot = ref('')
const selectedChord = ref('')

function onSelectedRootChange(e) {
  selectedRoot.value = e.target.value
}

function onSelectedChordChange(e) {
  selectedChord.value = e.target.value
}

const thisChord = computed(() => {
  let output = ''

  switch (selectedChord.value) {
    case 'maj':
      output = getMajorChordAsObj(selectedRoot.value)
      break
    case 'min':
      output = getMinorChordAsObj(selectedRoot.value)
      break
    case 'aug':
      output = getAugmentedChordAsObj(selectedRoot.value)
      break
    case 'dim':
      output = getDiminishedChordAsObj(selectedRoot.value)
      break
  }

  return output
})
</script>

<template>
  <div class="selector">
    <select
      v-model="selectedRoot"
      name="root-selection"
      @change="onSelectedRootChange(e)"
    >
      <option value="0">
        C
      </option>
      <option value="1">
        C#/Db
      </option>
      <option value="2">
        D
      </option>
      <option value="3">
        D#/Eb
      </option>
      <option value="4">
        E
      </option>
      <option value="5">
        F
      </option>
      <option value="6">
        F#/Gb
      </option>
      <option value="7">
        G
      </option>
      <option value="8">
        G#/Ab
      </option>
      <option value="9">
        A
      </option>
      <option value="10">
        A#/Bb
      </option>
      <option value="11">
        B
      </option>
    </select>
    <select
      v-model="selectedChord"
      name="chord-selection"
      @change="onSelectedChordChange(e)"
    >
      <option value="maj">
        Major Triad
      </option>
      <option value="min">
        Minor Triad
      </option>
      <option value="dim">
        Diminished Triad
      </option>
      <option value="aug">
        Augmented Triad
      </option>
    </select>
    <div v-if="selectedRoot && selectedChord" class="display">
      <p>
        Selected Root: {{ selectedRoot }}
        Selected Chord: {{ selectedChord }}
      </p>
      <p class="display">
        Chord Def: {{ thisChord.chordString }}
      </p>
      <KeyBoard chord-pattern="0 4 7" />
    </div>
    <p v-else-if="selectedRoot" class="display">
      Select a Chord Pattern
    </p>
    <p v-else-if="selectedChord" class="display">
      Select a Root Note
    </p>
    <p v-else class="display">
      Select a Root Note and a Chord
    </p>
  </div>
</template>

<style scoped>
.selector {
  margin: 40px;
}

.display {
  margin: 50px;
}
</style>
