import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

  {
    path: '/authors',
    name: 'Authors',
    component: () => import('../views/Authors.vue')
  },

  {
    path: '/vnews',
    name: 'ViolenceView',
    component: () => import('../views/ViolenceView.vue')
  },

  {
    path: '/pnews',
    name: 'ProtestView',
    component: () => import('../views/ProtestView.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
