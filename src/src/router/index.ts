import { createRouter, createWebHistory } from 'vue-router'
import YinFuView from '@/views/YinFuView.vue'
import YueQinView from '@/views/YueQinView.vue'
import HomeView from '@/views/HomeView.vue'
import PianoView from '@/views/PianoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/yinfu',
      name: 'YinFuView',
      component: YinFuView,
    }, 
    {
      path: '/yueqin',
      name: 'YueQinView',
      component: YueQinView, 
    },
    {
      path: '/piano',
      name: 'PianoView',
      component: PianoView, 
    }
  ]
})

export default router
