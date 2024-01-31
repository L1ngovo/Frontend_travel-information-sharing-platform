import { createRouter, createWebHistory } from 'vue-router'
import { router_view } from './router_view.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: router_view,
})

export default router
