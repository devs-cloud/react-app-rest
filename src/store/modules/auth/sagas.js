import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import * as actions from './actions'

function* signin({ payload }) {
  try {
    // const res = yield call(axios.post, '/signin', payload)
    const res = {
      data: {
        username: 'johndoe',
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        token: 'ABC123',
      },
    }
    yield put(actions.authSigninSuccess(res.data))
  } catch (error) {
    yield put(actions.authSigninFailure(error))
  }
}

export const saga = function* () {
  yield takeLatest(actions.authSignin, signin)
}
