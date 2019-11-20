import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';
import { Slide } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
const styles = {

  titleContainer:
  {
    textAlign: "Center",
    marginTop: "11vh"
  }
};


class AboutMe extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div >
        <div className={classes.titleContainer}>
          <Typography variant='h1'>Katie</Typography>
        </div>
        <div>
        </div>
      </div>
    )
  }


}


export default withStyles(styles)(AboutMe)
