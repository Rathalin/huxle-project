import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import GameView from '@/views/GameView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView,
  },
  {
    path: '/play/:wordEN/:wordDE',
    name: 'game',
    component: GameView,
  },
  {
    path: '/:pathMath(.*)*',
    name: 'not-found',
    component: () => import('@/views/errors/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export { routes }

export default router
