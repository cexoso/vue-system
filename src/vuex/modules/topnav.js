export default {
  state: {
    routernav: [
      {
        to: '/index',
        name: '首页'
      }, {
        to: '/user',
        name: '个人中心'
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
