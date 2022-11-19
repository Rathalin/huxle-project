<script setup lang="ts">
import SecondaryButton from '../buttons/SecondaryButton.vue'

defineProps<{
  to: string
  label: string
}>()
</script>

<template>
  <RouterLink :to="to">
    <button
      class="hover:bg-graphite-600 rounded-full px-4 py-1 transition-colors duration-200"
    >
      {{ label }}
    </button>
  </RouterLink>
</template>

<style scoped>
a.router-link-exact-active button {
  color: black;
  background-color: theme(colors.prime.500);
}

a.router-link-exact-active button:hover {
  background-color: theme(colors.prime.600);
}
</style>
