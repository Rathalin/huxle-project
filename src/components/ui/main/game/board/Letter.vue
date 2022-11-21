<script setup lang="ts">
import { computed } from '@vue/reactivity'
import type { LetterStateOption } from './letter-state'

export interface LetterState {
  letter?: string
  state: LetterStateOption
}

const stateClass = {
  unset: ['bg-letter-unset-normal', 'hover:bg-letter-unset-hover'],
  absent: ['bg-letter-absent-normal', 'hover:bg-letter-absent-hover'],
  present: ['bg-letter-present-normal', 'hover:bg-letter-present-hover'],
  correct: ['bg-letter-correct-normal', 'hover:bg-letter-correct-hover'],
}

const props = defineProps<LetterState>()

const letterUpper = computed(() => props.letter?.toLocaleUpperCase())
</script>

<template>
  <button
    class="w-11 sm:w-16 h-11 sm:h-16 font-special rounded-sm sm:px-4 sm:py-2 text- sm:text-2xl select-none"
    :class="stateClass[props.state]"
  >
    {{ letterUpper }}
  </button>
</template>
