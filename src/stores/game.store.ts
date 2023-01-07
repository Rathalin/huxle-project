import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
  const state = ref<'playing' | 'won' | 'lost'>('playing')

  return { state }
})
