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
        component: Home,
        meta:{
          title:'主页'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta:{
      title:'登录页'
    },
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta:{
      title:'注册页'
    },
    component: () => import('../views/register/register.vue')
  },
  {
    path: '*',
    meta:{
      title:'404'
    },
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
   document.title=to.meta.title    
   if(localStorage.getItem('user')){
     next()
   }else{
     (to.path==='/login'||to.path==='/register')?next():next('/login')
   }
  
})