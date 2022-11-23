<script setup lang="ts"></script>

<template>
  <button
    class="text-white bg-amber-700 hover:bg-amber-600 rounded-full px-4 py-1 transition-colors duration-200 flex gap-1"
    type="button"
  >
    <slot>{{ $t('ui.button.default-content') }}</slot>
  </button>
</template>
