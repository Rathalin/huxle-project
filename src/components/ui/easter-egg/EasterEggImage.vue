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
    class="absolute select-none pointer-events-none"
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
