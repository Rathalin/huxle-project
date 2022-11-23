<script setup lang="ts">
import SoftDialog from '@/components/ui/dialogs/SoftDialog.vue'
import { ref } from 'vue'

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
    <template v-slot:header>
      <span>{{ $t('view.game.dialog.invalid-link.heading') }}</span>
    </template>
    <div>{{ $t('view.game.dialog.invalid-link.content') }}</div>
  </SoftDialog>
</template>
