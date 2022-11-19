<script setup lang="ts">
import LetterButton from '@/components/ui/main/game/LetterButton.vue'
</script>

<template>
  <div class="flex justify-center gap-2">
    <LetterButton letter="A" state="incorrect" />
    <LetterButton letter="B" state="partlyCorrect" />
    <LetterButton letter="C" state="correct" />
  </div>
</template>

<style scoped>
div.house {
  font-size: 20ch;
  line-height: 100%;
}
</style>
