<script setup lang="ts">
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import SoftDialog from '@/components/ui/dialogs/SoftDialog.vue'
import { computed, ref } from 'vue'
import Board from '../board/Board.vue'

const props = defineProps<{
  guesses: number
  time: string
  // letterStates: Record<string, LetterStateOption>
}>()

const dialogEl = ref<InstanceType<typeof SoftDialog>>()
const showCopiedHint = ref(false)

function open(): void {
  dialogEl.value?.open()
}

const statsString = computed(
  () => `Guesses: ${props.guesses}, Time: ${props.time}`
)

function onCopyClick(_e: Event) {
  navigator.clipboard.writeText(statsString.value)
  showCopiedHint.value = true
}

defineExpose({
  open,
})
</script>

<template>
  <SoftDialog ref="dialogEl" @close="showCopiedHint = false">
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
          class="text-success mt-2 transition-opacity duration-300"
          :class="{ 'opacity-0': !showCopiedHint }"
        >
          {{ $t('view.game.dialog.stats.copied') }}
        </div>
      </div>
    </div>
  </SoftDialog>
</template>
