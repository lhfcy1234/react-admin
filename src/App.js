import React, { Component } from 'react'
import { Link, HashRouter as Router, Switch, Route } from 'react-router-dom'
import './app.scss'
import Home from './views/Home'
import Login from './views/Login'
import Info from './views/Login'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="text"><h1>11111</h1></div>
        <Switch>
          <Route  path="/" component={Home} exact/>
          <Route  path="/login" component={Login} exact/>
          <Route  path="/info" component={Info} exact/>
        </Switch>
      </Router>
    )
  }
}
