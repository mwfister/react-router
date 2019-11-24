import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Home } from './Home'
import { Navbar } from './Navbar'
import { PageNotFound } from './PageNotFound'
import { Players } from './Players'
import { TeamDetail } from './TeamDetail'
import { Teams } from './Teams'
import { Articles } from './Articles'

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/players'>
          <Players />
        </Route>
        <Route path='/teams'>
          <Teams />
        </Route>
        <Route path='/:teamId' exact>
          <TeamDetail />
        </Route>
        <Route path='/:teamId/articles'>
          <Articles />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  )
}
