<script setup lang="ts">
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import BasicDialog from '@/components/ui/dialogs/BasicDialog.vue'
import { useWordsStore } from '@/stores/words.store'
import { computed, ref } from 'vue'
import type { LetterStateOption } from '../board/letter-state'
import Board from '../board/WordBoard.vue'

const props = defineProps<{
  guesses: number
  time: string
}>()

const dialogEl = ref<InstanceType<typeof BasicDialog>>()
const showCopiedHint = ref(false)

const wordsStore = useWordsStore()

function openDialog() {
  dialogEl.value?.openDialog()
}

function closeDialog() {
  dialogEl.value?.closeDialog()
}

const statsString = computed(() => {
  const lines: string[] = []
  lines.push(`HUXLE`)
  lines.push(`Guesses: ${props.guesses}`)
  lines.push(`Time: ${props.time}`)
  lines.push(``)
  wordsStore.words.forEach((row) => {
    let line = ''
    row
      .filter((letter) => letter[1] != 'unset')
      .forEach((letter) => (line += getEmojiFromLetterState(letter[1])))
    if (line.length > 0) {
      lines.push(line)
    }
  })
  lines.push(``)
  lines.push(`huxle.vercel.app`)
  return lines.join('\n')
})

function onCopyClick(_e: Event) {
  navigator.clipboard.writeText(statsString.value)
  showCopiedHint.value = true
}

function getEmojiFromLetterState(state: LetterStateOption) {
  switch (state) {
    case 'correct':
      return '🟩'
    case 'present':
      return '🟨'
    case 'absent':
      return '⬛'
    default:
      return ''
  }
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
