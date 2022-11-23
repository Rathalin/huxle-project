<script setup lang="ts">
import SoftDialog from '@/components/ui/dialogs/SoftDialog.vue'
import { ref } from 'vue'
import Board from '../board/Board.vue'
import type { LetterStateOption } from '../board/letter-state'

defineProps<{
  guesses: number
  timeInSeconds: number
  // letterStates: Record<string, LetterStateOption>
}>()

const dialogEl = ref<InstanceType<typeof SoftDialog>>()

function open(): void {
  dialogEl.value?.open()
}

defineExpose({
  open,
})
</script>

<template>
  <SoftDialog ref="dialogEl">
    <Board />
  </SoftDialog>
</template>
