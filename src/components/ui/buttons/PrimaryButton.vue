<script setup lang="ts"></script>

<template>
  <button
    class="text-black bg-cyan-600 hover:bg-cyan-700 rounded-full px-6 py-1 transition-colors duration-200 flex gap-1"
    type="button"
  >
    <slot>{{ $t('ui.button.default-content') }}</slot>
  </button>
</template>
