import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import test from './views/test'
import test1 from './views/test1'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            name: 'home',
            component: () =>
                import ('@/views/home')
        },
        { path: '/test', name: 'test', component: test },
        { path: '/test1', name: 'test1', component: test1 },
        {
            path: '/user',
            name: 'user',
            component: () =>
                import ('@/views/user')
        }
    ]
})