import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'


/**
 * COMPONENT
 */
class Routes extends Component {


  render() {

    return (

      <Switch>
        <Route exact path="/" />
        <Route exact path="/aboutme" />
        <Route exact path='/projects' />
        <Route exact path='/photo-gallery' />
      </Switch>

    )
  }
}


export default Routes


