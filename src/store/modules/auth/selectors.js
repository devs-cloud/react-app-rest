import { get } from 'lodash'

export const currentUser = (state) => get(state, 'auth.currentUser')
