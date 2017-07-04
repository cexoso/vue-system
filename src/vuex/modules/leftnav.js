import * as types from './../mutations-types'
import router from 'router'

export default {
  state: {
    leftMenu: [{
      index: 1,
      icon: 'ios-paper',
      title: '分类一',
      subs: [{
        index: '1-1',
        name: '表格',
        to: '/index/table'
      }, {
        index: '1-2',
        name: '树形控件',
        to: '/index/tree'
      }, {
        index: '1-3',
        name: '表单',
        to: '/index/form'
      }]
    }, {
      index: 2,
      icon: 'ios-people',
      title: '分类二',
      subs: [{
        index: '2-1',
        name: '标签页',
        to: '/index/tabs'
      }, {
        index: '2-2',
        name: '弹窗框',
        to: '/index/modal'
      }]
    }],
    name: [],
    breadcrumb: []
  },
  getters: {
    leftMenu: state => state.leftMenu,
    breadcrumb: state => state.name[0]
  },
  mutations: {
    [types.IS_ACTIVE]: (state, key) => {
      // 面包屑
      state.name = []
      let name = key.split('-').map((a) => --a)
      let title = state.leftMenu[name[0]].title
      let sub = state.leftMenu[name[0]].subs[name[1]].name
      state.name.push([title, sub])
      // 路由切换
      let to = ''
      to = state.leftMenu[name[0]].subs[name[1]].to
      router.push({ path: to })
    }
  },
  actions: {
    isActive: ({
      commit
    }, key) => commit('IS_ACTIVE', key)
  }
}
