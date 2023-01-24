import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MasterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/#contactus',
    name: 'contactus',

    component: () => import(/* webpackChunkName: "contactus" */ '../views/MasterView.vue'),
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
