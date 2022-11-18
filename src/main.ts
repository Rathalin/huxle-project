import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import de from './locales/de.json'

import App from './App.vue'
import router from './router/router'

import './assets/main.css'

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    en,
    de,
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
