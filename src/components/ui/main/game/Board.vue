<script setup lang="ts">
import LetterInput from './LetterInput.vue'

defineProps<{
  word: string
}>()

const tries = 6
const wordLength = 5
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-row gap-1" v-for="_i of tries">
      <LetterInput v-for="_i of wordLength" />
    </div>
  </div>
</template>
