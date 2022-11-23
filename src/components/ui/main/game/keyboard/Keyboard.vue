<script setup lang="ts">
import type { LetterStateOption } from '../board/letter-state'
import KeyButton from './KeyButton.vue'

defineProps<{
  letterStates: Record<string, LetterStateOption>
}>()

defineEmits<{
  (e: 'key', key: string): void
}>()

const rows = [
  'qwertzuiop'.split(''),
  'asdfghjkl'.split(''),
  ['Enter', ...'yxcvbnm'.split(''), 'Backspace'],
]
</script>

<template>
  <div class="mt-4 sm:mt-6 select-none flex flex-col items-center">
    <div class="flex gap-1 mb-1 touch-manipulation" v-for="(row, i) in rows">
      <KeyButton v-for="key in row" :key="key" :keyChar="key" />
    </div>
  </div>
</template>
