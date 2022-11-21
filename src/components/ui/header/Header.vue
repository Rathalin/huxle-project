<script setup lang="ts">
import LogoButton from './LogoButton.vue'
import NavBar from './NavBar.vue'
import LocaleSwitcher from './LocaleSwitcher.vue'
</script>

<template>
  <header class="bg-graphite-900 p-2 drop-shadow-md flex items-center">
    <LogoButton class="w-3/12 flex sm:justify-start sm:items-center" />
    <NavBar class="w-6/12 flex justify-start sm:justify-center items-center" />
    <LocaleSwitcher class="w-3/12 flex justify-end items-center" />
  </header>
</template>
