<script setup lang="ts">
defineProps<{
  x: number
  y: number
  scale: number
  rotation: string
  opacity: string
}>()
</script>

<template>
  <span
    class="pointer-events-none absolute select-none"
    :style="{
      left: `${x}%`,
      top: `${y}%`,
      transform: `scale(${scale})`,
      rotate: rotation,
      opacity: opacity,
    }"
  >
    <slot></slot>
  </span>
</template>
