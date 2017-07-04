import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const NotFound = resolve => require(['views/notfound'], resolve)
const Login = resolve => require(['views/Login'], resolve)
const Index = resolve => require(['views/Index'], resolve)
const Hello = resolve => require(['./../components/pages/Hello'], resolve)

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
    children: [{
      path: '/index/:key',
      name: 'subs',
      component: Hello
    }]
  }]
})
