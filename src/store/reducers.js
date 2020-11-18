import { combineReducers } from 'redux'
import { reducer as authReducer } from './modules/auth'

const reducer = combineReducers({
  auth: authReducer,
})

export default reducer
