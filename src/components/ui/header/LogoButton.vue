<script setup lang="ts">
import SecondaryButton from '../buttons/SecondaryButton.vue'
import LogoText from '../logo/LogoText.vue'
</script>

<template>
  <RouterLink to="/game">
    <SecondaryButton>
      <LogoText class="pt-1 text-2xl" />
    </SecondaryButton>
  </RouterLink>
</template>

<style scoped></style>
