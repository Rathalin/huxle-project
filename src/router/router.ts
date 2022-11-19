import { createRouter, createWebHistory } from 'vue-router'
import GameView from '@/views/GameView.vue'
import CreateView from '@/views/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'game',
      component: GameView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
    },
    {
      path: '/:pathMath(.*)*',
      name: 'not-found',
      component: () => import('@/views/errors/NotFoundView.vue'),
    },
  ],
})

export default router
