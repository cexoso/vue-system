import * as types from './../mutations-types'
export default {
  state: {
    items: [{
      id: '1',
      text: '父类 1',
      name: '1',
      indent: '0',
      children: [{
        id: '1-1',
        text: '子类 1',
        name: '1-1',
        indent: '1'
      }, {
        id: '1-2',
        text: '子类 2',
        name: '1-2',
        indent: '1',
        children: [{
          id: '1-2-1',
          text: '子类 1-1',
          name: '1-2-1',
          indent: '2'
        }]
      }]
    }, {
      id: '2',
      text: '父类 2',
      name: '2',
      indent: '0'
    }],
    table: [],
    icon: false
  },
  getters: {
    table: state => state.items,
    icon: state => state.icon,
    list: state => state.list
  },
  mutations: {
    [types.TOGGLE_TREE] (state, index) {
      let a = state.items[index]
      if (a.children !== undefined) {
        let x = state.items
        a.children.forEach(function (e) {
          x.push(e)
        }, this)
      }
    }
  },
  actions: {
    toggletree: ({
      commit
    }, index) => commit('TOGGLE_TREE', index)
  }
}
