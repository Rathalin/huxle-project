<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { useLocaleStore } from '@/stores/locale.store'
import type { LocaleOption } from '@/locales/i18n'
import germany from '@/assets/images/countries/germany.png'
import unitedKingdom from '@/assets/images/countries/united-kingdom.png'
import SoftButton from '../buttons/SoftButton.vue'

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
  <div>
    <SoftButton @click="onSwitchClick">
      <div class="hidden lg:flex gap-1">{{ $t('header.locale.toggle') }}</div>
      <img
        :src="selectedLocaleImage"
        :alt="selectedLocaleUpper"
        class="h-7 select-none"
      />
    </SoftButton>
  </div>
</template>
