// import * as types from './../mutations-types'
export default {
  state: {
    routernav: [
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
    routernav: state => state.routernav
  },
  mutations: {

  },
  actions: {

  }
}
