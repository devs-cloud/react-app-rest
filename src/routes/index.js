import React from 'react'
import MainLayout from 'containers/Layouts/MainLayout'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Listing from 'pages/Listing'
import Login from 'components/Forms/LoginForm'
import Home from 'pages/Home'
import PropertyDetail from 'containers/PropertyDetail'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/listing" exact component={Listing} />
          <Route path="/listing/:id" component={PropertyDetail} />
          <Route path="/" exact component={Home} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
