import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import routerexit from './modules/routerexit'
import topnav from './modules/topnav'
import leftnav from './modules/leftnav'
import rightmain from './modules/rightmain'

export default new Vuex.Store({
  modules: {
    routerexit,   // 顶部登录
    topnav,   // 顶部导航
    leftnav,  // 左边区域导航
    rightmain   // 右侧内容
  }
})
