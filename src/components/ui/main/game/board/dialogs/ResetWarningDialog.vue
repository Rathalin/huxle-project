<script setup lang="ts">
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import SecondaryButton from '@/components/ui/buttons/SecondaryButton.vue'
import SoftDialog from '@/components/ui/dialogs/SoftDialog.vue'
import { ref } from 'vue'

const dialogEl = ref<InstanceType<typeof SoftDialog>>()

function onConfirmClick(_e: Event) {
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
  <SoftDialog ref="dialogEl" :closable="false">
    <template v-slot:header>
      <span class="text-xl">{{
        $t('view.game.dialog.reset-warning.heading')
      }}</span>
    </template>
    <div class="flex flex-wrap gap-2 mt-4">
      <SecondaryButton @click="onCancelClick">{{
        $t('view.game.dialog.reset-warning.content.cancel')
      }}</SecondaryButton>
      <PrimaryButton @click="onConfirmClick">{{
        $t('view.game.dialog.reset-warning.content.confirm')
      }}</PrimaryButton>
    </div>
  </SoftDialog>
</template>
