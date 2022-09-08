import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Comp1 from '../views/Competition1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/competition1',
      name: 'competition 1',
      component: Comp1
    }
    
  ]
})

export default router
