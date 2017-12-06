import * as types from './mutation-types'

export function test ({ commit, state }, value) {
  commit(types.APP_DRAWER_TOGGLE, value)
}
