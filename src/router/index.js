import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PharmacyManage from '../views/PharmacyManage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pharmacy_manage',
    name: 'pharmacy_manage',
    component: PharmacyManage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
