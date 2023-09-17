<script setup>
const props = defineProps(['chordPattern'])
</script>

<template>
  <h1 v-if="props.chordPattern">
    {{ props.chordPattern }}
  </h1>
  <canvas id="thaCanvas" />
</template>
