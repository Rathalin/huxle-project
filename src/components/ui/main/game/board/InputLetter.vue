<script setup lang="ts">
import { computed } from 'vue'
import type { LetterStateOption } from './letter-state'

export interface LetterState {
  letter?: string
  state: LetterStateOption
}

const stateClass: Record<LetterStateOption, string[]> = {
  unset: ['bg-light-letter-unset-normal', 'dark:bg-dark-letter-unset-normal'],
  absent: [
    'bg-light-letter-absent-normal',
    'dark:bg-dark-letter-absent-normal',
  ],
  present: [
    'bg-light-letter-present-normal',
    'dark:bg-dark-letter-present-normal',
  ],
  correct: [
    'bg-light-letter-correct-normal',
    'dark:bg-dark-letter-correct-normal',
  ],
}

const props = defineProps<LetterState>()

const letterUpper = computed(() => props.letter?.toLocaleUpperCase())
</script>

<template>
  <button
    type="button"
    class="text- h-11 w-11 select-none rounded-sm font-special sm:h-16 sm:w-16 sm:px-4 sm:py-2 sm:text-2xl"
    :class="stateClass[props.state]"
  >
    {{ letterUpper }}
  </button>
</template>
