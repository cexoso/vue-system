// import * as types from './../mutations-types'
export default {
  state: {
    routerexit: [
      {
        to: '/index',
        name: '首页'
      }, {
        to: '/notfound',
        name: '404'
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
