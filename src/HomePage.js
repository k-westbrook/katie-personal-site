import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing, spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import sea from './sea.mp4';
import CardMedia from '@material-ui/core/CardMedia';
import PetsIcon from '@material-ui/icons/Pets';

const styles = {
  homePageContainer:
  {
    position: "relative",

  },
  titleContainer:
  {
    textAlign: "Center",
    position: "absolute",
    top: "60%",
    left: "25%",
  },
  video:
  {
    width: "100%",

  },
  titleHome:
  {
    fontSize: "20vh"
  },
  infoHome:
  {
    fontSize: "3vh"
  },
  infoContainer:
  {
    display: "flex",
    backgroundColor: "rgb(47,79,79);opacity:0.8",
    borderStyle: "solid",
    adjustContent: "center",
    padding: "3vw"
  }

};


class HomePage extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.homePageContainer}>
          <div>
            <CardMedia className={classes.video} component="video" src={sea} autoPlay loop>

            </CardMedia>
          </div>

          <div className={classes.titleContainer}>
            <Typography className={classes.titleHome} variant='h1' > Welcome</Typography>
          </div>

        </div >
        <div className={classes.infoContainer}>
          <Typography className={classes.infoHome}>I wanted a place to compile and share my photos. <br />Click on Top Right Menu to see categories</Typography>
          <PetsIcon />
        </div>
      </div>
    )
  }


}


export default withStyles(styles)(HomePage)
