import { defineStore } from 'pinia'
import { ref } from 'vue'

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

  const solution = ref('hello')

  return { words, solution }
})