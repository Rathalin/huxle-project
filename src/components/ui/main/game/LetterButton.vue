<script setup lang="ts">
import { computed } from '@vue/reactivity'

export type LetterButtonState = 'incorrect' | 'partlyCorrect' | 'correct'

const stateClass = {
  incorrect: ['bg-letter-incorrect', 'hover:bg-letter-incorrectHover'],
  partlyCorrect: [
    'bg-letter-partlyCorrect',
    'hover:bg-letter-partlyCorrectHover',
  ],
  correct: ['bg-letter-correct', 'hover:bg-letter-correctHover'],
}

const props = defineProps<{
  letter: string
  state: LetterButtonState
}>()

const letterUpper = computed(() => props.letter.toLocaleUpperCase())
</script>

<template>
  <button
    class="rounded-xl px-6 py-4 text-2xl"
    :class="stateClass[props.state]"
  >
    {{ letterUpper }}
  </button>
</template>
