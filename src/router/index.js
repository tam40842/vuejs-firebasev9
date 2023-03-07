import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from "@/configs/firebase";


// Auth Guards
const requireAuth = (to, from, next) => {
  const user = getAuth().currentUser
  if (!user) next({ name: 'login', params: {} })

  else next()

}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        text: 'Hey, Sky albert',
        leading: true,
        isShowFooter: true,
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
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        text: 'Profile',
        leading: false,
        isShowFooter: true,
      },
      component: () => import('../views/Profile.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/Logout.vue')
    },
    {
      path: '/report',
      name: 'report',
      meta: {
        text: 'Report',
        leading: false,
        isShowFooter: true,
      },
      component: () => import('../views/Report.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/new-transactions',
      name: 'newtransactions',
      meta: {
        text: 'New Transaction',
        leading: false,
        isShowFooter: false,
      },
      component: () => import('../views/NewTransactions.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/budget',
      name: 'budget',
      meta: {
        text: 'Budget',
        leading: false,
        isShowFooter: true,
      },
      component: () => import('../views/Budget.vue')
    }
  ]
})

export default router
