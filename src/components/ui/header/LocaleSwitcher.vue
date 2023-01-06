<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale.store'
import SubtleButton from '../buttons/SubtleButton.vue'
import ResetWarningDialog from '../main/game/board/dialogs/ResetWarningDialog.vue'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const { toggleLocale } = useLocaleStore()
const route = useRoute()
const resetWarningDialogEl = ref<InstanceType<typeof ResetWarningDialog>>()

function onSwitchClick() {
  const path = computed(() => route.path)
  if (path.value.includes('play')) {
    resetWarningDialogEl.value?.openDialog()
  } else {
    toggleLocale()
  }
}
</script>

<template>
  <div>
    <SubtleButton @click="onSwitchClick">
      <div class="flex items-center gap-1">
        <i class="material-icons">language</i>
        <div class="flex lg:hidden">{{ $t('header.locale.toggle.short') }}</div>
        <div class="hidden gap-1 lg:flex">
          {{ $t('header.locale.toggle.long') }}
        </div>
      </div>
    </SubtleButton>
    <ResetWarningDialog ref="resetWarningDialogEl" />
  </div>
</template>
