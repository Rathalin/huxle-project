<script setup lang="ts"></script>

<template>
  <button
    class="bg-graphite-600 hover:bg-graphite-500 rounded-full px-4 py-1 transition-colors duration-200"
    type="button"
  >
    <div class="flex gap-1">
      <slot>{{ $t('ui.button.default-content') }}</slot>
    </div>
  </button>
</template>
