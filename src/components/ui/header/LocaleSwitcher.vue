<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale.store'
import SubtleButton from '../buttons/SubtleButton.vue'

const { toggleLocale } = useLocaleStore()

function onSwitchClick() {
  toggleLocale()
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
  </div>
</template>
