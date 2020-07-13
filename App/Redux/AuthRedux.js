import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { AsyncStorage } from 'react-native'
// import _ from 'lodash'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginSuccess: ['data'],
  setUser: ['user'],
  logoutSuccess: null

})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: null,
  token: null,
  refreshToken: null,
  type: null
})

/* ------------- Selectors ------------- */

export const AuthSelectors = {
  getToken: state => state.token,
  getUser: state => state.user
}

/* ------------- Reducers ------------- */

export const loginSuccess = (state, { data }) => {
  AsyncStorage.setItem('auth', JSON.stringify(data))
  return state.merge({ ...data })
}
export const setUser = (state, { user }) => state.merge({ user })
export const logoutSuccess = (state) => {
  AsyncStorage.removeItem('auth')
  return state.merge({ user: null, token: null, refreshToken: null, type: null })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.SET_USER]: setUser,
  [Types.LOGOUT_SUCCESS]: logoutSuccess

})
