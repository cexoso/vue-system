import * as types from './../mutations-types'
import router from 'router'

export default {
  state: {
    leftMenu: [{
      index: 1,
      icon: 'ios-paper',
      title: '内容管理',
      subs: [{
        index: '1-1',
        name: '文章管理',
        to: ''
      }, {
        index: '1-2',
        name: '评论管理',
        to: ''
      }, {
        index: '1-3',
        name: '举报管理',
        to: ''
      }]
    }, {
      index: 2,
      icon: 'ios-people',
      title: '用户管理',
      subs: [{
        index: '2-1',
        name: '新增用户',
        to: ''
      }, {
        index: '2-2',
        name: '活跃用户',
        to: ''
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
      router.push({ name: 'subs', params: { key: 'subs' }, query: { page: key } })
    }
  },
  actions: {
    isActive: ({
      commit
    }, key) => commit('IS_ACTIVE', key)
  }
}
