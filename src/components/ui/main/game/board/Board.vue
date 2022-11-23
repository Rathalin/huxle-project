<script setup lang="ts">
import LetterInput from './LetterInput.vue'

const tries = 6
const wordLength = 5
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-row flex-wrap gap-1">
      <LetterInput letter="h" state="present" />
      <LetterInput letter="u" state="absent" />
      <LetterInput letter="x" state="absent" />
      <LetterInput letter="l" state="present" />
      <LetterInput letter="e" state="correct" />
    </div>
    <div class="flex flex-row gap-1" v-for="_i of tries - 1">
      <LetterInput v-for="_i of wordLength" state="unset" />
    </div>
  </div>
</template>
