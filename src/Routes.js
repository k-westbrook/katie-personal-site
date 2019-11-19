import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage';
import Cats from './Cats'
import { withStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';


const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "#37474f",
    minHeight: "100vh",
    width: "100%"
  }
}


class Routes extends Component {


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cats" component={Cats} />
          <Route exact path='/projects' />
          <Route exact path='/photo-gallery' />
        </Switch>
      </div>
    )
  }
}


export default withStyles(styles)(Routes)


