import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BusinessTapper from '@/components/BusinessTapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/',
      name: 'home',
      component: BusinessTapper
    }
  ]
})
