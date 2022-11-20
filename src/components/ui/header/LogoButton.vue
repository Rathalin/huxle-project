<script setup lang="ts">
import LogoText from '../logo/LogoText.vue'
import NavButton from './NavButton.vue'
</script>

<template>
  <RouterLink to="/">
    <NavButton>
      <div class="pt-1">
        <LogoText class="text-2xl" />
      </div>
    </NavButton>
  </RouterLink>
</template>
