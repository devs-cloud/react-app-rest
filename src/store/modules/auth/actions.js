import { createAction } from 'redux-actions'

export const AUTH_SIGNIN = 'AUTH_SIGNIN'
export const AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS'
export const AUTH_SIGNIN_FAILURE = 'AUTH_SIGNIN_FAILURE'
export const authSignin = createAction(AUTH_SIGNIN)
export const authSigninSuccess = createAction(AUTH_SIGNIN_SUCCESS)
export const authSigninFailure = createAction(AUTH_SIGNIN_FAILURE)
