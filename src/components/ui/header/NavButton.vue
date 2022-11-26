<script setup lang="ts"></script>

<template>
  <button
    class="flex rounded-full px-4 py-1 transition-colors duration-200 hover:bg-neutral-400 dark:hover:bg-graphite-500"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
a.router-link-exact-active button {
  background-color: theme(colors.neutral.400);
}

a.router-link-exact-active button:hover {
  background-color: theme(colors.neutral.500);
}
@media (prefers-color-scheme: dark) {
  a.router-link-exact-active button {
    background-color: theme(colors.graphite.600);
  }

  a.router-link-exact-active button:hover {
    background-color: theme(colors.graphite.400);
  }
}
</style>
