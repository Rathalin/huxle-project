import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import type { LetterStateOption } from '@/components/ui/main/game/board/letter-state'

export const useGameStore = defineStore('game', () => {
  const state = ref<'playing' | 'won' | 'lost'>('playing')

  const currentRowIndex = ref(0)
  const currentRow = ref(0)
  const keyboardLocked = ref(false)
  const rowComplete = ref(false)

  const keyboardStates = reactive({
    keys: new Map<string, LetterStateOption>([]),
  })

  return {
    state,
    currentRowIndex,
    currentRow,
    keyboardLocked,
    rowComplete,
    keyboardStates,
  }
})
