<script setup lang="ts">
import { computed } from 'vue'

export interface LetterState {
  letter?: string
  state: string
}

const stateClass: Record<string, string[]> = {
  unset: [
    'bg-light-letter-unset-normal',
    'hover:bg-light-letter-unset-hover',
    'dark:bg-dark-letter-unset-normal',
    'dark:hover:bg-dark-letter-unset-hover',
  ],
  absent: [
    'bg-light-letter-absent-normal',
    'hover:bg-light-letter-absent-hover',
    'dark:bg-dark-letter-absent-normal',
    'dark:hover:bg-dark-letter-absent-hover',
  ],
  present: [
    'bg-light-letter-present-normal',
    'hover:bg-light-letter-present-hover',
    'dark:bg-dark-letter-present-normal',
    'dark:hover:bg-dark-letter-present-hover',
  ],
  correct: [
    'bg-light-letter-correct-normal',
    'hover:bg-light-letter-correct-hover',
    'dark:bg-dark-letter-correct-normal',
    'dark:hover:bg-dark-letter-correct-hover',
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
