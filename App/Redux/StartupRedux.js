import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null
})

export const StartupTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isStarting: true
})

export const startup = state => state.merge({ isStarting: false })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: startup
})
