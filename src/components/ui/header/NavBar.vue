<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavButton from './NavButton.vue'
</script>

<template>
  <nav
    class="flex justify-start sm:justify-center items-center flex-wrap gap-x-10"
  >
    <RouterLink to="/create">
      <NavButton>{{ $t('header.link.create.label') }}</NavButton>
    </RouterLink>
  </nav>
</template>
