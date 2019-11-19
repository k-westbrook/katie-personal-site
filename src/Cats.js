import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
const styles = {

  titleContainer:
  {
    textAlign: "Center"
  }
};


class Cats extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div >
        <div className={classes.titleContainer}>
          <Typography variant='h1'>Cats</Typography>
        </div>
      </div>
    )
  }


}


export default withStyles(styles)(Cats)
