import { handleActions } from 'redux-actions'
import update from 'immutability-helper'
import * as actions from './actions'

const initialState = {
  currentUser: {
    loading: false,
    data: null,
    error: null,
  },
}

export const reducer = handleActions(
  {
    [actions.AUTH_SIGNIN]: (state, action) =>
      update(state, {
        currentUser: { $merge: { loading: true, data: null, error: null } },
      }),
    [actions.AUTH_SIGNIN_SUCCESS]: (state, action) =>
      update(state, {
        currentUser: { $merge: { loading: false, data: action.payload } },
      }),
    [actions.AUTH_SIGNIN_SUCCESS]: (state, action) =>
      update(state, {
        currentUser: { $merge: { loading: false, error: action.payload } },
      }),
  },
  initialState
)
