import * as types from './../mutations-types'
import router from 'router/index'
import api from 'assets/js/api'

export default {
  state: {
    login: []
  },
  getters: {
    login: (state) => state.login
  },
  mutations: {
    [types.LOGIN] (state, res) {
      state.login.length = 0
      state.login.push({
        username: state.login.username,
        password: state.login.password
      })
      localStorage.setItem('token', res.data.info.token)

      router.push({ name: 'index' })
      state.login.username = ''
      state.login.password = ''
    }
  },
  actions: {
    logIn ({ commit }, login) {
      api.post('/login', login)
      .then(function (res) {
        if (res.data.code === 200) {
          commit('LOGIN', res)
        }
      })
    }
  }
}
