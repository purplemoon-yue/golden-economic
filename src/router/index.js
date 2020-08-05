import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeViews from '@/views'
import Home from '@/views/home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HomeViews,
        // redirect:'/home',
        children:[
            Home
        ]
    },{
        path: '/Login',
        component:() => import('@/views/login/Login')
    },{
        path: '/Forget',
        component:() => import('@/views/login/Forget')
    },{
        path: '/Registered',
        component:() => import('@/views/login/Registered')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
