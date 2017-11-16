// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import router from './router'
// import Hello from '@/components/Hello'
// import BusinessTapper from '@/components/BusinessTapper'
import VueLocalStorage from 'vue-localstorage'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)
Vue.use(VueLocalStorage)
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  localStorage: {},
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
