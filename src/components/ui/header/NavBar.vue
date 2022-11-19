<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavButton from './NavButton.vue'
</script>

<template>
  <nav class="flex justify-center align-middle flex-wrap gap-x-10">
    <NavButton to="/create" :label="$t('header.link.create.label')" />
  </nav>
</template>
