import { createI18n, type I18n } from 'vue-i18n'

export const SUPPORT_LOCALES = ['en', 'de']

export function setupI18n(options = { locale: 'en' }) {
  const i18n = createI18n(options)
  setI18nLanguate(i18n, options.locale)
}

export function setI18nLanguate(i18n: I18n, locale: string) {
  if (i18n.mode === 'legacy') {
  }
}
