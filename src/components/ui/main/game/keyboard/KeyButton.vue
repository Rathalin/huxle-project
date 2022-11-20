<script setup lang="ts">
defineProps<{
  keyChar: string
}>()

defineEmits<{
  (e: 'key', keyChar: string): void
}>()
</script>

<template>
  <button
    class="bg-graphite-600 hover:bg-graphite-500 px-2 py-1 sm:px-4 sm:py-3 rounded-sm key-min-width"
    @click="$emit('key', keyChar)"
  >
    <span
      class="text-sm sm:text-2xl uppercase flex items-center justify-center"
    >
      <span v-if="keyChar !== 'Backspace'">{{ keyChar }}</span>
      <i v-else class="material-icons">backspace</i>
    </span>
  </button>
</template>

<style scoped>
.key-min-width {
  min-width: 2ch;
}
@media screen and (min-width: 640px) {
  .key-min-width {
    min-width: 6ch;
  }
}
</style>
