import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { DynamicImport } from './DynamicImport'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { PageNotFound } from './PageNotFound'

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/players'>
          <DynamicImport load={() => import('./Players')} name="Players" key="Players"/>
        </Route>
        <Route path='/teams'>
          <DynamicImport load={() => import('./Teams')} name="Teams" key="Teams"/>
        </Route>
        <Route path='/:teamId' exact>
          <DynamicImport load={() => import('./TeamDetail')} name="TeamDetail" key="TeamDetail"/>
        </Route>
        <Route path='/:teamId/articles'>
          <DynamicImport load={() => import('./Articles')} name="Articles" key="Articles"/>
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  )
}
