<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavButton from './NavButton.vue'
</script>

<template>
  <nav
    class="flex justify-start sm:justify-center items-center flex-wrap gap-x-10"
  >
    <NavButton to="/create" :label="$t('header.link.create.label')" />
  </nav>
</template>
