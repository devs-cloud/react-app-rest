import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import axios from 'axios'

import { store } from './store'
import Routes from './routes'
import './styles/app.scss'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URI

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
