import Vue from 'vue'
import Router from 'vue-router'
import Component from './views/Component.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'component',
      component: Component
    },
    {
      path: '/block',
      name: 'Block',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Block.vue')
    },
    {
      path: '/document',
      name: 'Document',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Document.vue')
    },
    {
      path: '/template',
      name: 'Template',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Template.vue')
    }
  ]
})
