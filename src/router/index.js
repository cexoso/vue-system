import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const NotFound = resolve => require(['views/notfound'], resolve)
const Login = resolve => require(['views/Login'], resolve)
const Index = resolve => require(['views/Index'], resolve)
const Hello = resolve => require(['views/Hello'], resolve)

const table = resolve => require(['components/pages/table'], resolve)
const tree = resolve => require(['components/pages/tree'], resolve)
const form = resolve => require(['components/pages/form'], resolve)
const tabs = resolve => require(['components/pages/tabs'], resolve)
const modal = resolve => require(['components/pages/modal'], resolve)

export default new Router({
  mode: 'history',
  routes: [{
    path: '*',
    component: NotFound
  }, {
    path: '',
    redirect: 'login'
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Hello',
        component: Hello
      }, {
        path: '/index/table',
        name: 'table',
        component: table
      }, {
        path: '/index/tree',
        name: 'tree',
        component: tree
      }, {
        path: '/index/form',
        name: 'form',
        component: form
      }, {
        path: '/index/tabs',
        name: 'tabs',
        component: tabs
      }, {
        path: '/index/modal',
        name: 'modal',
        component: modal
      }
    ]
  }]
})
