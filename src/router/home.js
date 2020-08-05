const homeRouter = {
    path: 'home',
    component: () => import('@/views'),
    // redirect:{
    //     path:'/home/'
    // },
    children:[
        {
            path:'/',
            component:() => import('@/views/home/index')
        },
        {
            path:'/hangqing',
            component:() => import('@/views/hangqing')
        },{
            path:'/new',
            component:() => import('@/views/new')
        },{
            path:'/user',
            component:() => import('@/views/user')
        }
    ],
}

export default homeRouter