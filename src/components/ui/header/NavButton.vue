<script setup lang="ts"></script>

<template>
  <button
    class="hover:bg-graphite-600 rounded-full px-4 py-1 transition-colors duration-200"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
a.router-link-exact-active button {
  background-color: theme(colors.graphite.700);
}

a.router-link-exact-active button:hover {
  background-color: theme(colors.graphite.500);
}
</style>
