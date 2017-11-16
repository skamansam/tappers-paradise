// import shop from '../../api/shop'
import * as types from '../mutation-types'

// TODO: this was supposed to be for a model called products, but needs to be changed for the App states

// initial state
// shape: [{ id, quantity }]
const state = {
  clipped: false,
  drawer: true,
  fixed: false,
  miniVariant: false,
  right: true,
  rightDrawer: false
}

// getters
const getters = {
  clipped: state => state.clipped,
  drawer: state => state.drawer,
  fixed: state => state.fixed,
  miniVariant: state => state.miniVariant,
  right: state => state.right,
  rightDrawer: state => state.rightDrawer
}

// actions
const actions = {
  openMenu ({ commit, state }, app) {
    commit(types.APP_DRAWER_OPEN, true)
  },
  closeMenu ({ commit, state }, app) {
    commit(types.APP_DRAWER_OPEN, false)
  }
}

// mutations
const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
