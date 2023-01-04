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
  const wordEN = ref(atob(route.params.wordEN.toString()))
  const wordDE = ref(atob(route.params.wordDE.toString()))

  return { words, wordEN, wordDE }
})
