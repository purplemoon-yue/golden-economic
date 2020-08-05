import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeViews from '@/views'
import Home from './home'//这里写错了
import Hangqing from './hangqing'
import New from './new'
import User from './user'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeViews,
    redirect:'/login',
    children: [
      Home, Hangqing, New, User
    ]
  }, {
    path: '/login',
    component: () => import('@/views/login/Login')
  }, {
    path: '/forget',
    component: () => import('@/views/login/Forget')
  }, {
    path: '/registered',
    component: () => import('@/views/login/Registered')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
