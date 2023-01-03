<script setup lang="ts">
import Letter from './InputLetter.vue'

export interface LetterState {
  letter?: string
  state: string
}

defineProps<LetterState>()
</script>

<template>
  <Letter :letter="letter" :state="state" />
</template>
