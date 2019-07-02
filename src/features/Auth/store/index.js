export default {
  namespaced: true,

  state: {
    currentUser: {
      company: null,
      document: null,
      email: null,
      name: null,
      password: null
    }
  },

  mutations: {
    SET_CURRENT_USER(state, user) {
      state.currentUser = user
    }
  },

  actions: {
    setCurrentUser({ commit }, user) {
      commit('SET_CURRENT_USER', user)
    }
  }
}
