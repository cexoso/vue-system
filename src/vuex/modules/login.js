import * as types from './../mutations-types'
import axios from 'axios'
import router from 'router/index'

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
      sessionStorage.setItem('token', res.data.info.token)

      router.push({ name: 'index' })
      state.login.username = ''
      state.login.password = ''
    }
  },
  actions: {
    logIn ({ commit }, login) {
      axios.post('https://www.easy-mock.com/mock/5962eeb29adc231f357c6bd5/sys/login', login)
      .then(function (res) {
        if (res.data.code === 200) {
          commit('LOGIN', res)
        }
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  }
}
