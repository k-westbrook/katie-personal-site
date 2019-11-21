import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing, spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import mobilehome from './mobilehome.jpg';
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
    marginTop: "8vh"

  },
  titleContainer:
  {
    textAlign: "center",
    marginBottom: "2vh",
    backgroundColor: "rgb(47,79,79);opacity:0.8"


  },
  video:
  {
    width: "100%",
    height: "auto",
    marginBottom: "2vh"


  },
  titleHome:
  {
    fontSize: "10vh"
  },
  infoHome:
  {
    fontSize: "4vh"
  },
  infoContainer:
  {
    display: "flex",
    flexDirection: "column",
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
    fontSize: "6vw"
  }

};


class HomePageMobile extends Component {



  render() {

    const { classes } = this.props;
    return (
      <div>
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
