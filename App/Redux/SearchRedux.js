// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  search: ['searchTerm'],
  clearText: null,
  cancelSearch: null,
  cancelSearching: null,
  showSearchBar: null
})

export const TemperatureTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searchTerm: '',
  searching: false,
  showSearchBar: false
})

/* ------------- Reducers ------------- */

export const performSearch = (state, { searchTerm }) => {
  return state.merge({ searching: true, searchTerm })
}

export const clearText = (state) => state.merge({ searchTerm: '' })

export const cancelSearch = (state) => state.merge({ searchTerm: '', searching: false, showSearchBar: false })
export const cancelSearching = (state) => state.merge({ searching: false })
export const showSearchBar = (state) => state.merge({ showSearchBar: true })
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH]: performSearch,
  [Types.CLEAR_TEXT]: clearText,
  [Types.CANCEL_SEARCH]: cancelSearch,
  [Types.CANCEL_SEARCHING]: cancelSearching,
  [Types.SHOW_SEARCH_BAR]: showSearchBar
})
