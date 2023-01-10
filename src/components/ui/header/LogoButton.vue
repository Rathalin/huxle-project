<script setup lang="ts">
import LogoText from '../logo/LogoText.vue'
import NavButton from './NavButton.vue'
</script>

<template>
  <RouterLink to="/">
    <NavButton>
      <div class="hidden sm:flex">
        <LogoText class="margin-fix text-2xl" />
      </div>
      <div class="flex sm:hidden">
        <i class="material-icons p-0 text-2xl leading-tight">home</i>
      </div>
    </NavButton>
  </RouterLink>
</template>

<style scoped>
.margin-fix {
  margin-bottom: -2px;
}
</style>
