<script setup lang="ts">
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import SecondaryButton from '@/components/ui/buttons/SecondaryButton.vue'
import BasicDialog from '@/components/ui/dialogs/BasicDialog.vue'
import { ref } from 'vue'
import { useLocaleStore } from '@/stores/locale.store'
import { useLocalStorageSupport } from '@/composables/LocalStorageSupport'
import { useGameStore } from '@/stores/game.store'
import { useWordsStore } from '@/stores/words.store'

const dialogEl = ref<InstanceType<typeof BasicDialog>>()
const { toggleLocale } = useLocaleStore()
const { clearLocalStorage } = useLocalStorageSupport()
const gameStore = useGameStore()
const wordStore = useWordsStore()

function onConfirmClick(_e: Event) {
  toggleLocale()
  clearLocalStorage()
  gameStore.$reset()
  wordStore.$reset()
  dialogEl.value?.closeDialog()
}

function onCancelClick(_e: Event) {
  dialogEl.value?.closeDialog()
}

function openDialog() {
  dialogEl.value?.openDialog()
}

defineExpose({
  openDialog,
})
</script>

<template>
  <BasicDialog ref="dialogEl" :closable="false">
    <template v-slot:header>
      <span class="text-xl">{{
        $t('view.game.dialog.reset-warning.heading')
      }}</span>
    </template>
    <div class="mt-4 flex flex-wrap gap-2">
      <SecondaryButton @click="onCancelClick">{{
        $t('view.game.dialog.reset-warning.content.cancel')
      }}</SecondaryButton>
      <PrimaryButton @click="onConfirmClick">{{
        $t('view.game.dialog.reset-warning.content.confirm')
      }}</PrimaryButton>
    </div>
  </BasicDialog>
</template>
