import { createRouter, createWebHistory } from 'vue-router'
import YueQinView from '@/views/YueQinView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'YueQinView',
      component: YueQinView, 
    },
  ]
})

export default router
