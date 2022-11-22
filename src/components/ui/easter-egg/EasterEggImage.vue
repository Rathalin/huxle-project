<script setup lang="ts">
defineProps<{
  x: number
  y: number
  r: number
  rotation: string
  opacity: string
}>()
</script>

<template>
  <span
    class="absolute select-none"
    :style="{
      left: `${x}%`,
      top: `${y}%`,
      transform: `scale(${r})`,
      rotate: rotation,
      opacity: opacity,
    }"
  >
    <slot></slot>
  </span>
</template>
