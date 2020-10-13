import Vue from 'vue'
import Router from 'vue-router'
import LocalState from './pages/LocalState'
import VuexState from './pages/VuexState'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      component: LocalState
    },
    {
      path: '/VuexState',
      component: VuexState
    }
  ]
})
