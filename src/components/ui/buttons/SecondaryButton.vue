<script setup lang="ts"></script>

<template>
  <button
    class="rounded-full bg-neutral-200 px-4 py-1 transition-colors duration-200 hover:bg-neutral-300 dark:bg-graphite-500 dark:hover:bg-graphite-400"
    type="button"
  >
    <div class="flex gap-1">
      <slot>{{ $t('ui.button.default-content') }}</slot>
    </div>
  </button>
</template>
