<script setup lang="ts">
import { computed } from '@vue/reactivity'

export type LetterStateOption =
  | 'unset'
  | 'incorrect'
  | 'partlyCorrect'
  | 'correct'
export interface LetterState {
  letter?: string
  state: LetterStateOption
}

const stateClass = {
  unset: ['bg-letter-unset-normal', 'hover:bg-letter-unset-hover'],
  incorrect: ['bg-letter-incorrect-normal', 'hover:bg-letter-incorrect-hover'],
  partlyCorrect: [
    'bg-letter-partlyCorrect-normal',
    'hover:bg-letter-partlyCorrect-hover',
  ],
  correct: ['bg-letter-correct-normal', 'hover:bg-letter-correct-hover'],
}

const props = defineProps<LetterState>()

const letterUpper = computed(() => props.letter?.toLocaleUpperCase())
</script>

<template>
  <button
    class="w-16 h-16 font-special rounded-sm px-6 py-4 text-2xl"
    :class="stateClass[props.state]"
  >
    {{ letterUpper }}
  </button>
</template>
