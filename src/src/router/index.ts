import { createRouter, createWebHistory } from 'vue-router'
import YinFuView from '../views/YinFuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'YinFuView',
      component: YinFuView
    }
  ]
})

export default router
