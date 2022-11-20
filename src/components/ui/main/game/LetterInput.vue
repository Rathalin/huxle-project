<script setup lang="ts">
import Letter from './Letter.vue'

export type LetterStateOption =
  | 'unset'
  | 'incorrect'
  | 'partlyCorrect'
  | 'correct'
export interface LetterState {
  letter?: string
  state: LetterStateOption
}

const props = defineProps<LetterState>()
</script>

<template>
  <Letter :letter="letter" :state="state" />
</template>
