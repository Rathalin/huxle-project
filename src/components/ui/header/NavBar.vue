<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Logo from './Logo.vue'
import NavButton from '../buttons/SecondaryButton.vue'
</script>

<template>
  <nav class="flex justify-center align-middle flex-wrap gap-x-10">
    <ul>
      <NavButton>
        <RouterLink to="/create">Create your own Huxle</RouterLink>
      </NavButton>
    </ul>
  </nav>
</template>
