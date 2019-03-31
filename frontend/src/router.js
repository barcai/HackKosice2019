import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from './views/Dashboard.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
var analysis = () => import(/* webpackChunkName: "analysis" */ './views/Analysis.vue')
var history = () => import(/* webpackChunkName: "history" */ './views/History.vue')
var team = () => import(/* webpackChunkName: "team" */ './views/Team.vue')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/profile'
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
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
      
      redirect: '/profile'
    }
  ]
})
