<script setup lang="ts"></script>

<template>
  <button
    class="bg-purple-600 hover:bg-purple-500 rounded-full pl-6 pr-3 py-1 transition-colors duration-200 flex gap-1 items-center"
    type="button"
  >
    <slot>{{ $t('ui.button.default-content') }}</slot>
    <span
      class="py-[2px] px-[6px] font-mono text-gray-300 text-[10pt] uppercase bg-purple-900 rounded-full"
      >Debug</span
    >
  </button>
</template>
