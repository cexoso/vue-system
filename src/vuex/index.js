import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import topnav from './modules/topnav'
import rightmain from './modules/rightmain'

export default new Vuex.Store({
  modules: {
    topnav,
    rightmain
  }
})
