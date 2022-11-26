<script setup lang="ts">
import BasicDialog from '@/components/ui/dialogs/BasicDialog.vue'
import { ref } from 'vue'

const dialogEl = ref<InstanceType<typeof BasicDialog>>()

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
  <BasicDialog ref="dialogEl">
    <template v-slot:header>
      <span class="text-4xl">{{ $t('view.game.dialog.winner.heading') }}</span>
    </template>
    <div>{{ $t('view.game.dialog.winner.content') }}</div>
  </BasicDialog>
</template>
