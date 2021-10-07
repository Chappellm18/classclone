import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import feed from '../views/feed.vue'
import Session from '../services/session'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresLogin: false }
  },
  {
    path: '/feed',
    name: 'feed',
    component: feed,
    meta: { requiresLogin: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  if(to.meta.requiresLogin && !Session.user){
    next('/login');
  }
  else {
    next();
  }
})

export default router
