import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import de from '@/locales/de.json'
import grogu from '@/locales/grogu.json'

export const defaultLocale = 'en'
export type LocaleOption = 'en' | 'de' | 'grogu'
export const localeOptions: LocaleOption[] = [defaultLocale, 'de']

export const i18n = createI18n({
  locale: defaultLocale,
  globalInjection: true,
  fallbackLocale: 'en',
  messages: {
    en,
    de,
    grogu,
  },
})
