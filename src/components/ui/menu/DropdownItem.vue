<script setup lang="ts">
defineEmits<{
  (e: 'select'): void
}>()
</script>

<template>
  <li @click="$emit('select')">
    <slot></slot>
  </li>
</template>
