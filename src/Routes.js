import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact'
import { withStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';


const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "#37474f",
    minHeight: "100vh",
    minWidth: "100vw",

  }
}


class Routes extends Component {


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/aboutMe" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contactMe" component={Contact} />

        </Switch>
      </div>
    )
  }
}


export default withStyles(styles)(Routes)


