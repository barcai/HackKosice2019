import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
var profile = () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
var analysis = () => import(/* webpackChunkName: "analysis" */ './views/Analysis.vue')
var history = () => import(/* webpackChunkName: "history" */ './views/History.vue')
var team = () => import(/* webpackChunkName: "team" */ './views/Team.vue')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: analysis
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '*',
      
      redirect: '/dashboard'
    }
  ]
})
