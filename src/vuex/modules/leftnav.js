import * as types from './../mutations-types'
import router from 'router'
import api from 'assets/js/api'

export default {
  state: {
    leftMenu: [],
    name: [],
    breadcrumb: []
  },
  getters: {
    leftMenu: state => state.leftMenu,
    breadcrumb: state => state.name ? JSON.parse(localStorage.getItem('breadcrumb')) : state.name[0]
  },
  mutations: {
    [types.IS_ACTIVE]: (state, key) => {
      // 面包屑
      state.name = []
      let name = key.split('-').map((a) => --a)
      let title = state.leftMenu[name[0]].title
      let sub = state.leftMenu[name[0]].subs[name[1]].name
      state.name.push([title, sub])
      sessionStorage.setItem('breadcrumb', JSON.stringify(state.name[0]))

      // 路由切换
      let to = ''
      to = state.leftMenu[name[0]].subs[name[1]].to
      router.push({
        path: to
      })
    },
    leftMenu: (state, res) => {
      state.leftMenu = res.leftMenu
    }
  },
  actions: {
    isActive: ({
      commit
    }, key) => commit('IS_ACTIVE', key),

    leftMenu ({
      commit
    }, res) {
      api.leftMenu()
        .then(function (res) {
          commit('leftMenu', res)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
