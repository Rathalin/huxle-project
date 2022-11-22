<script setup lang="ts">
defineProps<{
  x: number
  y: number
  r: number
}>()
</script>

<template>
  <span
    class="absolute select-none"
    :style="{
      left: `${x}%`,
      top: `${y}%`,
      transform: `scale(${r})`,
    }"
  >
    <slot></slot>
  </span>
</template>
