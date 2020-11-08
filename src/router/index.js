import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/layout/Home'
import layout from '../views/layout/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'layout',
    component: layout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/register.vue')
  },
  {
    path: '*',
    component: () => import( '../views/404/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


router.beforeEach((to, from, next) => {
  console.log(to)
})