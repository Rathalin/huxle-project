<script setup lang="ts">
import LogoText from '../logo/LogoText.vue'
import NavButton from './NavButton.vue'
</script>

<template>
  <RouterLink to="/">
    <NavButton>
      <div class="hidden sm:flex">
        <LogoText class="text-2xl margin-fix" />
      </div>
      <div class="flex sm:hidden">
        <i class="text-2xl leading-tight p-0 material-icons">home</i>
      </div>
    </NavButton>
  </RouterLink>
</template>

<style scoped>
.margin-fix {
  margin-bottom: -2px;
}
</style>
