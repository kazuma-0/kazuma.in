export const state = () => ({
  loggedIn: false,
  user: null,
})

export const mutations = {
  setLoginState(state, status) {
    state.loggedIn = status
  },
  setUser(state, user) {
    state.user = user
  },
}

export const getters = {
  getLoginState(state) {
    return state.loggedIn
  },
  getLoggedInUser(state) {
    return state.user
  },
}
