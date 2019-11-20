import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing, spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import sea from './sea.mp4';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  homePageContainer:
  {
    position: "relative"
  },
  titleContainer:
  {
    textAlign: "Center",
    position: "absolute",
    top: "60%",
    left: "25%"
  },
  titleHome:
  {
    fontSize: "20vh"
  }

};


class HomePage extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div className={classes.homePageContainer}>
        <div>
          <CardMedia component="video" src={sea} autoPlay loop>

          </CardMedia>
        </div>

        <div className={classes.titleContainer}>
          <Typography className={classes.titleHome} variant='h1' > Welcome</Typography>
        </div>

      </div >
    )
  }


}


export default withStyles(styles)(HomePage)
