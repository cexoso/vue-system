import * as types from './../mutations-types'
export default {
  state: {
    leftMenu: [
      {
        index: 1,
        icon: 'ios-paper',
        title: '内容管理',
        subs: [
          {
            index: '1-1',
            name: '文章管理'
          }, {
            index: '1-2',
            name: '评论管理'
          }, {
            index: '1-3',
            name: '举报管理'
          }
        ]
      }, {
        index: 2,
        icon: 'ios-people',
        title: '用户管理',
        subs: [
          {
            index: '2-1',
            name: '新增用户'
          }, {
            index: '2-2',
            name: '活跃用户'
          }
        ]
      }
    ]
  },
  getters: {
    leftMenu: state => state.leftMenu
  },
  mutations: {
    [types.IS_ACTIVE]: (state) => {
      console.log(1)
    }
  },
  actions: {
    isActive: ({commit}) => commit('IS_ACTIVE')
  }
}
