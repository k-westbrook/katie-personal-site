import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';

const styles = {
  root: {
    b: "0vh"
  }
};


class HomePage extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1>home
      </h1>
      </div>
    )
  }


}


export default withStyles(styles)(HomePage)
