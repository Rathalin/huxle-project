<script setup lang="ts"></script>

<template>
  <button
    class="bg-graphite-600 hover:bg-graphite-500 px-1 py-1 rounded-sm transition-colors duration-200"
    type="button"
  >
    <div class="flex gap-1">
      <slot>Click</slot>
    </div>
  </button>
</template>
