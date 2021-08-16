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
    path: '/acknowledgment',
    name: 'Acknowledgment',
    component: () => import('../views/Acknowledgment.vue')
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

  {
    path: '/snews',
    name: 'StreetFacesView',
    component: () => import('../views/StreetFacesView.vue')
  },
  
  {
    path: '/wnews',
    name: 'WomanView',
    component: () => import('../views/WomanView.vue')
  },

  {
    path: '/ednalva',
    name: 'EdnalvaView',
    component: () => import('../views/EdnalvaView.vue')
  },

  {
    path: '/dayvid',
    name: 'DayvidView',
    component: () => import('../views/DayvidView.vue')
  },

  {
    path: '/francis',
    name: 'FrancisView',
    component: () => import('../views/FrancisView.vue')
  },

  {
    path: '/jeremias',
    name: 'JeremiasView',
    component: () => import('../views/JeremiasView.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
