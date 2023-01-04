import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export const useWordsStore = defineStore('words', () => {
  const words = ref([
    [
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
    ],
    [
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
    ],
    [
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
    ],
    [
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
    ],
    [
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
    ],
    [
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
      ['', 'unset'],
    ],
  ])

  const route = useRoute()
  // the words will be encoded and decoded using Base64
  const wordEN = atob(route.params.wordEN)
  const wordDE = atob(route.params.wordDE)

  return { words, wordEN, wordDE }
})
