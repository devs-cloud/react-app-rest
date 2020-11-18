import { all } from 'redux-saga/effects'
import { saga as AuthSaga } from './modules/auth'

export default function* rootSaga() {
  yield all([AuthSaga()])
}
