<script setup lang="ts">
import Logo from './Logo.vue'
import NavBar from './NavBar.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
</script>

<template>
  <header class="bg-graphite-900 p-2 drop-shadow-md flex items-center">
    <Logo class="w-3/12 hidden sm:flex sm:justify-start sm:items-center" />
    <NavBar
      class="w-9/12 sm:w-6/12 flex justify-start sm:justify-center items-center"
    />
    <LanguageSwitcher class="w-3/12 flex justify-end items-center" />
  </header>
</template>
