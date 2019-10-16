import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quizs',
      name: 'quizs',
      component: () => import('@/components/pages/quizs/quizs.vue')
    },
    {
      path: '/bar',
      name: 'bar',
      component: () => import('@/components/pages/bar.vue')
    }
  ]
})
