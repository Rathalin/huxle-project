<script setup lang="ts">
import BasicDialog from '@/components/ui/dialogs/BasicDialog.vue'
import { i18n } from '@/locales/i18n'
import { computed, ref } from 'vue'

const props = defineProps<{
  guesses: number
}>()

const dialogEl = ref<InstanceType<typeof BasicDialog>>()
const { t } = i18n.global

const winnerMessage = computed(() => {
  switch (props.guesses) {
    case 1:
      return {
        heading: t('view.game.dialog.winner.guesses.one.heading'),
        content: t('view.game.dialog.winner.guesses.one.content'),
      }
    case 2:
      return {
        heading: t('view.game.dialog.winner.guesses.two.heading'),
        content: t('view.game.dialog.winner.guesses.two.content'),
      }
    case 3:
      return {
        heading: t('view.game.dialog.winner.guesses.three.heading'),
        content: t('view.game.dialog.winner.guesses.three.content'),
      }
    case 4:
      return {
        heading: t('view.game.dialog.winner.guesses.four.heading'),
        content: t('view.game.dialog.winner.guesses.four.content'),
      }
    case 5:
      return {
        heading: t('view.game.dialog.winner.guesses.five.heading'),
        content: t('view.game.dialog.winner.guesses.five.content'),
      }
    default:
      return {
        heading: t('view.game.dialog.winner.guesses.six.heading'),
        content: t('view.game.dialog.winner.guesses.six.content'),
      }
  }
})

function openDialog() {
  dialogEl.value?.openDialog()
}

function closeDialog() {
  dialogEl.value?.closeDialog()
}

defineExpose({
  openDialog,
  closeDialog,
})
</script>

<template>
  <BasicDialog ref="dialogEl" :closable="false">
    <template v-slot:header>
      <span class="text-4xl">{{ winnerMessage.heading }}</span>
    </template>
    <div>{{ winnerMessage.content }}</div>
  </BasicDialog>
</template>
