<script setup lang="ts">
defineProps<{
  keyChar: string
  state: string
}>()

defineEmits<{
  (e: 'key', keyChar: string): void
}>()

const stateClass: Record<string, string[]> = {
  unset: [
    'bg-light-letter-unset-normal',
    'hover:bg-light-letter-unset-hover',
    'dark:bg-dark-letter-unset-normal',
    'dark:hover:bg-dark-letter-unset-hover',
  ],
  absent: [
    'bg-light-letter-absent-normal',
    'hover:bg-light-letter-absent-hover',
    'dark:bg-dark-letter-absent-normal',
    'dark:hover:bg-dark-letter-absent-hover',
  ],
  present: [
    'bg-light-letter-present-normal',
    'hover:bg-light-letter-present-hover',
    'dark:bg-dark-letter-present-normal',
    'dark:hover:bg-dark-letter-present-hover',
  ],
  correct: [
    'bg-light-letter-correct-normal',
    'hover:bg-light-letter-correct-hover',
    'dark:bg-dark-letter-correct-normal',
    'dark:hover:bg-dark-letter-correct-hover',
  ],
}
</script>

<template>
  <button
    :class="stateClass[state]"
    :id="keyChar"
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
