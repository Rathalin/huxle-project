<script setup lang="ts">
defineProps<{
  keyChar: string
  state: string
}>()

defineEmits<{
  (e: 'key', keyChar: string): void
}>()
</script>

<template>
  <button
    :class="state"
    class="key-min-width rounded-sm bg-neutral-300 px-2 py-3 hover:bg-neutral-400 dark:bg-graphite-500 dark:hover:bg-graphite-400 sm:px-4 sm:py-3"
    @click="$emit('key', keyChar)"
  >
    <span
      class="flex items-center justify-center text-sm uppercase sm:text-2xl"
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
