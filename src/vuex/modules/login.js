import * as types from './../mutations-types'
import router from 'router/index'
import api from 'assets/js/api'

export default {
  state: {
    login: {
      username: '',
      password: ''
    },
    msg: ''
  },
  getters: {
    login: (state) => state.login,
    msg: (state) => state.msg
  },
  mutations: {
    [types.LOGIN] (state, res) {
      localStorage.setItem('token', res.info.token)
      router.push({ name: 'index' })
      state.login.username = ''
      state.login.password = ''
    }
  },
  actions: {
    logIn ({ commit, state }, login) {
      api.post('/login/do_login_new_1', login)
      .then(function (res) {
        console.log(res)
        if (res.data.code === 200) {
          commit('LOGIN', res.data)
        } else {
          state.msg = res.data.message
        }
      })
    }
  }
}
