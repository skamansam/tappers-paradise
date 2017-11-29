import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import IncomeGenerator from '@/components/IncomeGenerator'

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
      component: IncomeGenerator

    }
  ]
})
