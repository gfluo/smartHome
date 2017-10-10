import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'Login'},
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
          }
        ]
    }
  ]
})
