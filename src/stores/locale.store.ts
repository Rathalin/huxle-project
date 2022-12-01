import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  defaultLocale,
  i18n,
  type LocaleOption,
  localeOptions,
} from '@/locales/i18n'

export const useLocaleStore = defineStore('locale', () => {
  const selectedLocale = ref<LocaleOption>('en')

  function toggleLocale() {
    // Only works with 2 locales
    selectedLocale.value =
      localeOptions.find((option) => option != selectedLocale.value) ??
      defaultLocale
    i18n.global.locale = selectedLocale.value
  }

  function activateSecretGroguLocale() {
    selectedLocale.value = 'grogu'
    i18n.global.locale = selectedLocale.value
  }

  return { selectedLocale, toggleLocale, activateSecretGroguLocale }
})
