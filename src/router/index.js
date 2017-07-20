import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const NotFound = resolve => require(['views/notfound'], resolve)
const Login = resolve => require(['views/Login'], resolve)
const User = resolve => require(['views/User'], resolve)
const Index = resolve => require(['views/Index'], resolve)
const Hello = resolve => require(['views/Hello'], resolve)

const table = resolve => require(['components/pages/table'], resolve)
const tree = resolve => require(['components/pages/tree'], resolve)
const form = resolve => require(['components/pages/form'], resolve)
const tabs = resolve => require(['components/pages/tabs'], resolve)
const modal = resolve => require(['components/pages/modal'], resolve)

const router = new Router({
  routes: [{
    path: '*',
    component: NotFound,
    meta: {
      requireAuth: true
    }
  }, {
    path: '',
    redirect: 'login'
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/user',
    name: 'user',
    component: User,
    meta: {
      requireAuth: true
    }
  }, {
    path: '/index',
    component: Index,
    children: [
      {
        path: '',
        name: 'index',
        component: Hello,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/index/table',
        name: 'table',
        component: table,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/index/tree',
        name: 'tree',
        component: tree,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/index/form',
        name: 'form',
        component: form,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/index/tabs',
        name: 'tabs',
        component: tabs,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/index/modal',
        name: 'modal',
        component: modal,
        meta: {
          requireAuth: true
        }
      }
    ]
  }]
})

// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
  let login = sessionStorage.getItem('token')
  if (to.meta.requireAuth) {
    if (!login) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})

export default router
