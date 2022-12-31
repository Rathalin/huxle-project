<script setup lang="ts">
import type { LetterStateOption } from '../board/letter-state'
import KeyButton from './KeyButton.vue'

defineProps<{
  letterStates: Record<string, LetterStateOption>
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
      v-for="row in rows"
      :key="row"
    >
      <KeyButton
        v-for="letter in row"
        :key="letter"
        :keyChar="letter"
        @key="$emit('keyInput', letter)"
      />
    </div>
  </div>
</template>
