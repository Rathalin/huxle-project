<script setup lang="ts"></script>

<template>
  <button
    class="rounded-sm bg-neutral-200 px-1 py-1 transition-colors duration-200 hover:bg-neutral-300 dark:bg-graphite-500 dark:hover:bg-graphite-400"
    type="button"
  >
    <div class="flex gap-1">
      <slot>Click</slot>
    </div>
  </button>
</template>
