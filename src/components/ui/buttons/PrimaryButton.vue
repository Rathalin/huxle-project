<script setup lang="ts"></script>

<template>
  <button
    class="flex gap-1 rounded-full bg-amber-500 px-4 py-1 transition-colors duration-200 hover:bg-amber-600 dark:bg-amber-700 dark:hover:bg-amber-600"
    type="button"
  >
    <slot>{{ $t('ui.button.default-content') }}</slot>
  </button>
</template>
