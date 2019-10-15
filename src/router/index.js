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
      path: '/foo',
      name: 'foo',
      component: () => import('@/components/pages/foo.vue')
    },
    {
      path: '/bar',
      name: 'bar',
      component: () => import('@/components/pages/bar.vue')
    }
  ]
})
