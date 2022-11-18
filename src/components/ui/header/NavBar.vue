<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavButton from './NavButton.vue';
</script>

<template>
  <nav class="flex gap-x-2">
    <NavButton>
      <RouterLink to="/">Home</RouterLink>
    </NavButton>
    <NavButton>
      <RouterLink to="/fail">Fail</RouterLink>
    </NavButton>
  </nav>
</template>