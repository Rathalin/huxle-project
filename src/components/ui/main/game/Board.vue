<script setup lang="ts">
import LetterInput from './LetterInput.vue'

defineProps<{
  word: string
}>()

const tries = 6
const wordLength = 5
</script>

<template>
  <div class="mt-10 flex flex-col gap-1">
    <div class="flex flex-row gap-1">
      <LetterInput letter="h" state="partlyCorrect" />
      <LetterInput letter="u" state="incorrect" />
      <LetterInput letter="x" state="incorrect" />
      <LetterInput letter="l" state="partlyCorrect" />
      <LetterInput letter="e" state="correct" />
    </div>
    <div class="flex flex-row gap-1" v-for="_i of tries - 1">
      <LetterInput v-for="_i of wordLength" state="unset" />
    </div>
  </div>
</template>
