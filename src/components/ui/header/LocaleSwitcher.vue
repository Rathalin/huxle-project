<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { useLocaleStore } from '@/stores/locale.store'
import type { LocaleOption } from '@/locales/i18n'
import germany from '@/assets/images/countries/germany.png'
import unitedKingdom from '@/assets/images/countries/united-kingdom.png'
import grogu from '@/assets/images/grogu-48.png'
import SubtleButton from '../buttons/SubtleButton.vue'

const { $state, toggleLocale } = useLocaleStore()
const images = new Map<LocaleOption, string>()
images.set('en', germany)
images.set('de', unitedKingdom)
images.set('grogu', grogu)

const selectedLocaleUpper = computed(() => $state.selectedLocale.toUpperCase())
const selectedLocaleImage = computed(() => images.get($state.selectedLocale))

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
