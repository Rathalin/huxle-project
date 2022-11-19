<script setup lang="ts">
import LogoText from '@/components/ui/logo/LogoText.vue'
import LetterButton from '@/components/ui/main/game/LetterInput.vue'
</script>

<template>
  <article>
    <h1>
      <span>Welcome to </span>
      <LogoText />
      <span>.</span>
    </h1>
    <div class="flex gap-2">
      <LetterButton letter="A" state="incorrect" />
      <LetterButton letter="B" state="partlyCorrect" />
      <LetterButton letter="C" state="correct" />
    </div>
  </article>
</template>
