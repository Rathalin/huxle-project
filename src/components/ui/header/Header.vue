<script setup lang="ts">
import Logo from './Logo.vue'
import NavBar from './NavBar.vue'
import LocaleSwitcher from './LocaleSwitcher.vue'
</script>

<template>
  <header
    class="bg-graphite-900 p-2 drop-shadow-md flex justify-between items-center"
  >
    <Logo />
    <NavBar />
    <LocaleSwitcher />
  </header>
</template>
