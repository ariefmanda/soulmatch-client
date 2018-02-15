import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import profile from '@/components/profile'
import login from '@/components/login'
import auth from './auth';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter : auth.auth
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      beforeEnter : auth.auth
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      beforeEnter : auth.auth2
    }
  ]
})
