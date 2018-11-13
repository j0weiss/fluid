import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './components/Main'
import Setup from './components/Setup'
import Settings from './components/Settings'

import PersistenceService from './services/PersistenceService'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      beforeEnter: (to, from, next) => {
        if (PersistenceService.getFluidGoal() === 0) {
          next({
            name: 'setup',
            replace: true
          })
        } else {
          next()
        }
      }
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup,
      beforeEnter: (to, from, next) => {
        if (PersistenceService.getFluidGoal() !== 0) {
          next({
            name: 'main',
            replace: true
          })
        } else {
          next()
        }
      }
    }
    ,
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
});


export default router;