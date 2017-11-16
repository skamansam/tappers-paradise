import * as types from './mutation-types'

export const appOpenMenu = ({ commit }) => {
  commit(types.APP_DRAWER_OPEN, true)
}
export const appCloseMenu = ({ commit }) => {
  commit(types.APP_CLIP_CONTENT, false)
}
