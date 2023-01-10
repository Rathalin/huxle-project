<script setup lang="ts">
import KeyButton from './KeyButton.vue'

const props = defineProps<{
  letterStates: Map<string, string>
}>()

defineEmits<{
  (e: 'keyInput', key: string): void
  (e: 'key', key: string): void
}>()

const rows = [
  'qwertzuiop'.split(''),
  'asdfghjkl'.split(''),
  ['Enter', ...'yxcvbnm'.split(''), 'Backspace'],
]
</script>

<template>
  <div class="mt-4 flex select-none flex-col items-center sm:mt-6">
    <div
      class="mb-1 flex touch-manipulation gap-1"
      v-for="(row, index) in rows"
      :key="index"
    >
      <KeyButton
        v-for="letter in row"
        :key="letter"
        :keyChar="letter"
        :state="props.letterStates.get(letter) ?? 'unset'"
        @key="$emit('keyInput', letter)"
      />
    </div>
  </div>
</template>
