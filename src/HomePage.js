import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing, spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import sea from './sea.mp4';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {

  titleContainer:
  {
    textAlign: "Center"
  }
};


class HomePage extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div >
        <div>
          <CardMedia component="video" src={sea} autoPlay>

          </CardMedia>
        </div>

        <div className={classes.titleContainer}>
          <Typography variant='h1'>Home</Typography>
        </div>

      </div >
    )
  }


}


export default withStyles(styles)(HomePage)
