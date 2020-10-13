import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    getUsersList(ctx) {
      ctx.commit('setLoading', true)
      fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(users => {
        ctx.commit('setUsersList', users)
        ctx.commit('setLoading', false)
      })
    }
  },
  mutations: {
    setUsersList(state, users) {
      state.usersList = users
    },
    setLoading(state, isLoading) {
      state.loading = isLoading
    }
  },
  state: {
    usersList: [],
    loading: true
  },
  getters: {
    usersList(state) {
      return state.usersList
    },
    isLoading(state) {
      return state.loading
    }
  }
})
