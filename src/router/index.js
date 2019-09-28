import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Season from '@/components/Season'

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
      name: 'Season',
      component: Season
    }
  ]
})
