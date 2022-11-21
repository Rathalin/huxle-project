<script setup lang="ts"></script>

<template>
  <button
    class="text-black bg-prime-500 hover:bg-prime-600 rounded-full pl-6 pr-3 py-1 transition-colors duration-200 flex gap-1 items-center"
    type="button"
  >
    <slot>{{ $t('ui.button.default-content') }}</slot>
    <span class="py-1 px-2 text-gray-300 text-sm bg-cyan-900 rounded-full"
      >Debug</span
    >
  </button>
</template>
