import * as types from './../mutations-types'
import router from 'router'
import api from 'assets/js/api'
import local from 'assets/js/storage'

export default {
  state: {
    leftMenu: [],
    breadcrumb: [],
    open: [],
    active: '',
    select: []
  },
  getters: {
    leftMenu: state => state.leftMenu,
    breadcrumb: state => state.breadcrumb ? local.getItem('breadcrumb') : state.breadcrumb,

    select: state => local.getItem('select'),
    open: state => state.select[0],
    active: state => state.select[1]
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

      state.select = [key, [name[0] + 1 + '']]

      // state.active = key
      // state.open = [name[0] + 1 + '']
      local.setItem('select', state.select)
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
