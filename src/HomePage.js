import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing, spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import sea from './sea.mp4';
import CardMedia from '@material-ui/core/CardMedia';
import PetsIcon from '@material-ui/icons/Pets';
import FireplaceTwoToneIcon from '@material-ui/icons/FireplaceTwoTone';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


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
    fontSize: "4vh"
  },
  infoContainer:
  {
    display: "flex",
    backgroundColor: "rgb(47,79,79);opacity:0.8",
    borderStyle: "solid",
    alignContent: "center",
    padding: "3vw",
    color: "#FFFFFF",
    justifyContent: "space-between"
  },
  iconContainer:
  {
    display: "flex",
    flexDirection: "row"
  },
  iconBottom:
  {
    marginLeft: "5vw",
    fontSize: "5vw"
  }

};


class HomePage extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.homePageContainer}>
          <div>
            <CardMedia className={classes.video} component="video" src={sea} autoplay="autoplay" loop>

            </CardMedia>
          </div>

          <div className={classes.titleContainer}>
            <Typography className={classes.titleHome} variant='h1' > Welcome</Typography>
          </div>

        </div >
        <div className={classes.infoContainer}>
          <Typography className={classes.infoHome}>Katie Westbrook <br />Welcome to my personal site!</Typography>
          <div className={classes.iconContainer}>
            <PetsIcon className={classes.iconBottom} />
            <AirplanemodeActiveIcon className={classes.iconBottom} />
            <FireplaceTwoToneIcon className={classes.iconBottom} />
            <BrightnessLowIcon className={classes.iconBottom} />
            <EmojiPeopleIcon className={classes.iconBottom} />
          </div>
        </div>
      </div>
    )
  }


}


export default withStyles(styles)(HomePage)
