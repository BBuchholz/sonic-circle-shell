<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'

// ADAPTED FROM: https://jelledev.com/html5-canvas-with-vue-composition-api-and-typescript/

// The important part: the name of the variable needs to be equal to the ref's name of the canvas element in the template
const canvasElement: Ref<HTMLCanvasElement | undefined> = ref()
const context: Ref<CanvasRenderingContext2D | undefined> = ref()
const notePattern: Ref<string | undefined> = ref()

onMounted(() => {
  // Get canvas context. If 'getContext' returns 'null', set to 'undefined', so that it conforms to the Ref typing
  context.value = canvasElement.value?.getContext('2d') || undefined

  render()
})

function render() {
  if (!context.value)
    return

  drawWhiteKeys()
  // drawBlackKeys()
}

function drawWhiteKeys() {
  if (!context.value)
    return

  for (let i = 0; i < 14; i++) {
    context.value.beginPath()
    context.value.rect(i * 24, 0, 24, 150)
    context.value.stroke()
  }
}

// function drawBlackKeys() {

// }
</script>

<template>
  <div>
    <span>{{ notePattern }}</span>
    <canvas
      ref="canvasElement"
      width="338"
      height="150"
    />
    <input v-model="notePattern" type="text">
  </div>
</template>
