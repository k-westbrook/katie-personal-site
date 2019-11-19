import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage';


/**
 * COMPONENT
 */
class Routes extends Component {


  render() {

    return (

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/aboutme" />
        <Route exact path='/projects' />
        <Route exact path='/photo-gallery' />
      </Switch>

    )
  }
}


export default Routes


