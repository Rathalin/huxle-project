<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { useLocaleStore } from '@/stores/locale.store'
import type { LocaleOption } from '@/locales/i18n'
import germany from '@/assets/images/countries/germany.png'
import unitedKingdom from '@/assets/images/countries/united-kingdom.png'

const { $state, toggleLocale } = useLocaleStore()
const images = new Map<LocaleOption, string>()
images.set('en', germany)
images.set('de', unitedKingdom)

const selectedLocaleUpper = computed(() => $state.selectedLocale.toUpperCase())
const selectedLocaleImage = computed(() => images.get($state.selectedLocale))

function onSwitchClick() {
  toggleLocale()
}
</script>

<template>
  <button @click="onSwitchClick" class="flex items-end">
    <img
      :src="selectedLocaleImage"
      :alt="selectedLocaleUpper"
      :title="$t('header.locale.toggle')"
      class="h-7"
    />
  </button>
</template>
