import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Comp1 from '../views/Competition1.vue'
import Comp2 from '../views/Competition2.vue'
import Comp3 from '../views/Competition3.vue'

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
    },

    {
      path: '/competition2',
      name: 'competition 2',
      component: Comp2
    },

    {
      path: '/competition3',
      name: 'competition 3',
      component: Comp3
    }
    
  ]
})

export default router
