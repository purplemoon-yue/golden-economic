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

// 这里处理多次点击当前路由报错,其实就是屏蔽错误,vue那边的坑
// 解决重复点击导航路由报错 vue-router 3.1.3版本还有问题,等升级后再说吧,暂时屏蔽错误，不影响功能
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push() {
  return originalPush.apply(this, Array.prototype.slice.apply(arguments)).catch(err => err)
}

export default router
