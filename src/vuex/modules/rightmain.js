// import * as types from './../mutations-types'
export default {
  state: {
    breadcrumb: [
        { name: '首页' },
        { name: '分类1' },
        { name: '表格' }
    ]
  },
  getters: {
    breadcrumb: state => state.breadcrumb
  },
  mutations: {

  },
  actions: {

  }
}
