import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { i18n } from './locales/i18n'

import './assets/styles/main.css'
import store from '@/stores/main.store'

const app = createApp(App)

app.use(store)
app.use(i18n)
app.use(router)

app.mount('#app')
