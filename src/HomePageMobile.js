import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing, spacing, borderColor } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import mobilehome from './mobilehome.jpg';
import CardMedia from '@material-ui/core/CardMedia';
import PetsIcon from '@material-ui/icons/Pets';
import FireplaceTwoToneIcon from '@material-ui/icons/FireplaceTwoTone';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';



const styles = {
  background:
  {
    backgroundColor: "rgb(47,79,79);opacity:0.8"

  },
  homePageContainer:
  {
    position: "relative",
    marginTop: "8vh"
  },
  titleContainer:
  {
    textAlign: "center",
    borderTopStyle: "solid",
    borderBottomStyle: "solid",
    borderWidth: "2vh",
    borderColor: "#E0F2F1"
  },
  video:
  {
    width: "100%",
    height: "auto"

  },
  titleHome:
  {
    fontSize: "10vh"
  },
  infoHome:
  {
    fontSize: "3vh"
  },
  infoContainer:
  {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(47,79,79);opacity:0.8",
    alignContent: "center",
    padding: "3vw",
    minHeight: "28vh",
    color: "#FFFFFF"
  },
  iconContainer:
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "3vh",

  },
  iconBottom:
  {
    fontSize: "6vh"
  }

};


class HomePageMobile extends Component {



  render() {

    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.homePageContainer}>
          <div>
            <CardMedia className={classes.video} component="img" src={mobilehome}>

            </CardMedia>
          </div>

          <div className={classes.titleContainer}>
            <Typography className={classes.titleHome} variant='h1' > Welcome</Typography>
          </div>

        </div >
        <div className={classes.infoContainer}>
          <Typography className={classes.infoHome}>Katie Westbrook <br />Welcome to my personal site!<br /> Designed and Coded by Me</Typography>
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


export default withStyles(styles)(HomePageMobile)
