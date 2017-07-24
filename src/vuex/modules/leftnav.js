import * as types from './../mutations-types'
import router from 'router'
import api from 'assets/js/api'
import local from 'assets/js/storage'

export default {
  state: {
    leftMenu: [],
    breadcrumb: [],
    open: [],
    active: ''
  },
  getters: {
    leftMenu: state => state.leftMenu,
    breadcrumb: state => state.breadcrumb ? local.getItem('breadcrumb') : state.breadcrumb,
    open: state => state.open,
    active: state => state.active
  },
  mutations: {
    [types.IS_ACTIVE]: (state, key) => {
      // 面包屑
      let name = key.split('-').map((a) => --a)
      let title = state.leftMenu[name[0]].title
      let sub = state.leftMenu[name[0]].subs[name[1]].name
      state.breadcrumb = [title, sub]
      local.setItem('breadcrumb', state.breadcrumb)

      // 路由切换
      let to = ''
      to = state.leftMenu[name[0]].subs[name[1]].to
      router.push({path: to})

      // 左导航
      local.setItem('select', [key, [name[0] + 1 + '']])
    },
    leftMenu: (state, res) => {
      state.leftMenu = res.leftMenu

      state.open = local.getItem('select')[1]
      state.active = local.getItem('select')[0]
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
