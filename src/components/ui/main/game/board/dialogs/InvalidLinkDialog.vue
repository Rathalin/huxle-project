<script setup lang="ts">
import SoftDialog from '@/components/ui/dialogs/SoftDialog.vue'
import { ref } from 'vue'

const dialogEl = ref<InstanceType<typeof SoftDialog>>()

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
  <SoftDialog ref="dialogEl">
    <template v-slot:header>
      <span class="text-4xl">{{
        $t('view.game.dialog.invalid-link.heading')
      }}</span>
    </template>
    <div>{{ $t('view.game.dialog.invalid-link.content') }}</div>
  </SoftDialog>
</template>
