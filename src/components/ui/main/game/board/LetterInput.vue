<script setup lang="ts">
import type { LetterStateOption } from './letter-state'
import Letter from './Letter.vue'

export interface LetterState {
  letter?: string
  state: LetterStateOption
}

const props = defineProps<LetterState>()
</script>

<template>
  <Letter :letter="letter" :state="state" />
</template>
