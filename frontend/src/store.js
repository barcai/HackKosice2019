import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      level: 3,
      levelName: 'Finance manager',
      name: 'Example User'
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    userLevel: (state) => state.user.level,
    userLevelName: (state) => state.user.levelName,
    userName: (state) => state.user.name
  }
})
