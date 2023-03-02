import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'default'
      },
      component: () => import('../views/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        layout: 'auth'
      },
      component: () => import('../views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: 'auth'
      },
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router
