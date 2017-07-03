// import * as types from './../mutations-types'
export default {
  state: {
    routerexit: [
      {
        to: '/user',
        name: '这里是名字'
      }, {
        to: '/login',
        name: '退出'
      }
    ]
  },
  getters: {
    routerexit: state => state.routerexit
  },
  mutations: {

  },
  actions: {

  }
}
