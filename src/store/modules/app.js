// import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  app_clipped: false,
  app_drawer: true,
  app_fixed: false,
  app_miniVariant: false,
  app_right: true,
  app_rightDrawer: false
}

// getters
const getters = {
  app_clipped: state => state.app_clipped,
  app_drawer: state => state.app_drawer,
  app_fixed: state => state.app_fixed,
  app_miniVariant: state => state.app_miniVariant,
  app_right: state => state.app_right,
  app_rightDrawer: state => state.app_rightDrawer
}

// actions
const actions = {
  app_toggleMenu ({ commit, state }, value) {
    commit(types.APP_DRAWER_TOGGLE, value)
  },
  app_openMenu ({ commit, state }, value) {
    commit(types.APP_DRAWER_OPEN, true)
  },
  app_closeMenu ({ commit, state }, value) {
    commit(types.APP_DRAWER_OPEN, false)
  }
}

// mutations
const mutations = {
  APP_DRAWER_OPEN (state, isOpen) {
    state.app_drawer = isOpen
  },
  APP_DRAWER_TOGGLE (state) {
    state.app_drawer = !state.app_drawer
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
