import { put, select, call } from 'redux-saga/effects'
import { is } from 'ramda'
import { AuthSelectors } from '../Redux/AuthRedux'
import { Actions, ActionConst } from 'react-native-router-flux'

// process STARTUP actions
export function * startup (action) {
  // const token = yield select(AuthSelectors.getToken)
  // console.log(token)
  // yield call(Actions.login, { type: ActionConst.RESET })
}
