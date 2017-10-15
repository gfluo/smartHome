import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: { name: 'Login' },
        },
        {
            path: '/login',
            name: 'Login',
            component: resolve => require(['../components/login.vue'], resolve)
        },
        {
            path: '/home',
            name: 'Home',
            component: resolve => require(['../components/home/home.vue'], resolve),
            children: [{
                path: '/home/room',
                name: 'Room',
                component: resolve => require(['../components/home/room.vue'], resolve)
            }, {
                path: '/home/category',
                name: 'Category',
                component: resolve => require(['../components/home/category.vue'], resolve)
            }, {
                path: '/home/productList',
                name: 'ProductList',
                component: resolve => require(['../components/home/productList.vue'], resolve)
            }, {
                path: '/home/goodsDetail',
                name: 'GoodsDetail',
                component: resolve => require(['../components/home/goodsDetail.vue'], resolve)
            }, {
                path: '/home/productAdd',
                name: 'ProductAdd',
                component: resolve => require(['../components/home/productAdd.vue'], resolve)
            }, {
                path: '/home/deviceList',
                name: 'DeviceList',
                component: resolve => require(['../components/home/deviceList.vue'], resolve)
            }, {
                path: '/home/factoryInfo',
                name: 'FactoryInfo',
                component: resolve => require(['../components/home/FactoryInfo.vue'], resolve)
            }, ]
        }
    ]
})