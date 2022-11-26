<script setup lang="ts">
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import BasicDialog from '@/components/ui/dialogs/BasicDialog.vue'
import { computed, ref } from 'vue'
import Board from '../board/Board.vue'

const props = defineProps<{
  guesses: number
  time: string
  // letterStates: Record<string, LetterStateOption>
}>()

const dialogEl = ref<InstanceType<typeof BasicDialog>>()
const showCopiedHint = ref(false)

function openDialog() {
  dialogEl.value?.openDialog()
}

function closeDialog() {
  dialogEl.value?.closeDialog()
}

const statsString = computed(() => {
  const lines: string[] = []
  lines.push(`Guesses: ${props.guesses}`)
  lines.push(`Time: ${props.time}`)
  return lines.join('\n')
})

function onCopyClick(_e: Event) {
  navigator.clipboard.writeText(statsString.value)
  showCopiedHint.value = true
}

defineExpose({
  openDialog,
  closeDialog,
})
</script>

<template>
  <BasicDialog ref="dialogEl" @close="showCopiedHint = false">
    <template v-slot:header>
      <div class="flex justify-center text-2xl">
        {{ $t('view.game.dialog.stats.header') }}
      </div>
    </template>
    <div class="flex flex-col">
      <div>{{ $t('view.game.dialog.stats.guesses', { guesses }) }}</div>
      <div>{{ $t('view.game.dialog.stats.time', { time }) }}</div>
      <div class="flex flex-col items-center">
        <Board />
      </div>
      <div class="mt-4 flex flex-col items-center">
        <PrimaryButton class="px-10" @click="onCopyClick">{{
          $t('view.game.dialog.stats.share')
        }}</PrimaryButton>
        <div
          class="mt-2 text-light-success transition-opacity duration-300 dark:text-dark-success"
          :class="{ 'opacity-0': !showCopiedHint }"
        >
          {{ $t('view.game.dialog.stats.copied') }}
        </div>
      </div>
    </div>
  </BasicDialog>
</template>
