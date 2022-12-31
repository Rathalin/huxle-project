<script setup lang="ts">
import type { LetterStateOption } from './letter-state'
import Letter from './InputLetter.vue'

export interface LetterState {
  letter?: string
  state: LetterStateOption
}

defineProps<LetterState>()
</script>

<template>
  <Letter :letter="letter" :state="state" />
</template>
