<script setup lang="ts"></script>

<template>
  <button
    class="flex items-center gap-1 rounded-full bg-purple-500 py-1 pl-4 pr-3 text-white transition-colors duration-200 hover:bg-purple-600 dark:bg-purple-600 dark:text-dark-normal dark:hover:bg-purple-500"
    type="button"
  >
    <slot>{{ $t('ui.button.default-content') }}</slot>
    <span
      class="rounded-full bg-purple-700 py-[2px] px-[6px] font-mono text-[10pt] uppercase dark:bg-purple-900"
      >Debug</span
    >
  </button>
</template>
