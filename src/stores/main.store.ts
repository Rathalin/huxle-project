import { createPinia } from 'pinia'
import storeReset from '@/stores/plugins/resetStore'

const store = createPinia()
store.use(storeReset)
export default store
