<script setup lang="ts">
import LogoButton from './LogoButton.vue'
import NavBar from './NavBar.vue'
import LocaleSwitcher from './LocaleSwitcher.vue'
</script>

<template>
  <header
    class="flex items-center bg-neutral-300 p-2 drop-shadow-md dark:bg-graphite-800"
  >
    <LogoButton class="flex w-3/12 sm:items-center sm:justify-start" />
    <NavBar class="flex w-6/12 items-center justify-start sm:justify-center" />
    <LocaleSwitcher class="flex w-3/12 items-center justify-end" />
  </header>
</template>
