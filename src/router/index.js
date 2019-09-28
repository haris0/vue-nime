import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home
    },
    {
      path: '/:year/:season',
      name: 'List',
      component: List
    },
    {
      path: '/anime/:id/:title',
      name: 'Detail',
      component: Detail
    }
  ]
})
