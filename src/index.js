import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import login from './components/login'
import createcharger from './components/createcharger'
import deletecharger from './components/deletecharger'
import getcharger from './components/getcharger'
import listchargers from './components/listchargers'
import updatecharger from './components/updatecharger'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={login} exact path="/login" />
        <Route component={NotFound} path="**" />
        <Route component={createcharger} exact path="/create" />
        <Route component={deletecharger} exact path="/delete/:id" />
        <Route component={getcharger} exact path="/getcharger/:id" />
        <Route component={listchargers} exact path="/getallchargers" />
        <Route component={updatecharger} exact path="/update/:id" />
        <Redirect to="**" />
        
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
