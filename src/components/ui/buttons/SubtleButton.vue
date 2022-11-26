<script setup lang="ts"></script>

<template>
  <button
    class="flex gap-1 rounded-full px-4 py-1 transition-colors duration-200 hover:bg-neutral-400 dark:hover:bg-graphite-500"
    type="button"
  >
    <slot>{{ $t('ui.button.default-content') }}</slot>
  </button>
</template>
