import * as types from './../mutations-types'
import router from 'router'
import api from 'assets/js/api'
import storage from 'assets/js/storage'

export default {
  state: {
    leftMenu: [],
    breadcrumb: []
  },
  getters: {
    leftMenu: state => state.leftMenu,
    breadcrumb: state => state.breadcrumb ? storage.getItem('breadcrumb') : state.breadcrumb
  },
  mutations: {
    [types.IS_ACTIVE]: (state, key) => {
      // 面包屑
      let name = key.split('-').map((a) => --a)
      let title = state.leftMenu[name[0]].title
      let sub = state.leftMenu[name[0]].subs[name[1]].name
      state.breadcrumb = [title, sub]
      storage.setItem('breadcrumb', state.breadcrumb)   // 保存面包屑数据
      // 路由切换
      let to = ''
      to = state.leftMenu[name[0]].subs[name[1]].to
      router.push({path: to})
    },
    leftMenu: (state, res) => {
      state.leftMenu = res.leftMenu
    }
  },
  actions: {
    isActive: ({commit}, key) => commit('IS_ACTIVE', key),

    leftMenu ({commit}, res) {
      api.get('/leftMenu')
        .then(function (res) {
          commit('leftMenu', res.data)
        })
    }
  }
}
