import type { LetterStateOption } from '@/components/ui/main/game/board/letter-state'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWordsStore = defineStore('words', () => {
  const rows: [string, LetterStateOption][][] = []
  for (let row = 0; row < 6; row++) {
    const cols: [string, LetterStateOption][] = []
    for (let col = 0; col < 5; col++) {
      cols.push(['', 'unset'])
    }
    rows.push(cols)
  }
  const words = ref(rows)

  return { words }
})
