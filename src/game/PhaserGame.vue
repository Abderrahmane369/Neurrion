<template>
  <div id="game-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import StartGame from './main'

// Save the current game instance
const game = ref()

onMounted(() => {
  game.value = StartGame('game-container')
})

onUnmounted(() => {
  if (game.value) {
    game.value.destroy(true)
    game.value = null
  }
})
</script>

<style scoped>

</style>
