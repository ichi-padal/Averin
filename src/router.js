import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('./views/Home.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: () => import('./views/Profile.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router