import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';
import keyboard from './keyboard.jpg';
import Typography from '@material-ui/core/Typography';
import CropDinIcon from '@material-ui/icons/CropDin';

const styles = {

  titleContainer:
  {

    marginTop: "11vh",
    display: "flex",
    width: "100vw"

  },
  imageContainer:
  {

    backgroundImage: `url(${keyboard})`,
    backgroundColor: "#37474f",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    borderStyle: "solid",
    height: "80vh",
    width: "100vw"


  },
  resumeContainer: {

    width: "100vw",


  },
  mainTitle:
  {
    fontSize: "10vh",
    textAlign: "center",
    marginTop: "3vh",
    color: "#FFFFFF",

  },
  subTitles:
  {
    fontSize: "7vh",
    color: "#FFFFFF"

  },
  list:
  {
    color: "#FFFFFF",
    fontSize: "3vh",
    display: "flex",
    flexDirection: "column",
    marginTop: "8vh",
    marginLeft: "3vw"
  },
  listItem:
  {
    color: "#FFFFFF",
    fontSize: "3vh",
    marginBottom: "8vh",
    display: "flex"
  },
  experienceItems:
  {
    flex: "display",
    flexDirection: "row",
    justifyContent: "flex-end",
    borderStyle: "solid"
  }
};


class AboutMe extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div >


        <div className={classes.titleContainer}>
          <div className={classes.imageContainer}></div>

        </div>
        <div className={classes.resumeContainer}>
          <div>

            <Typography variant='h1' className={classes.mainTitle}>About Me</Typography>
          </div>
          <div>
            <Typography variant="h3" className={classes.subTitles}>Experience</Typography>
          </div>
          <div>
            <div className={classes.list}>

              <div className={classes.listItem}>
                <div>
                  <CropDinIcon />
                </div>
                <div className={classes.experienceItems}>
                  <div>
                    <Typography variant='p'>Software Engineer Apprentice
                <br /> Microsft via Inconsulting Inc.</Typography>
                  </div>
                  <div>
                    <Typography variant='p'>April 2019 - August 2019</Typography>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div >
    )
  }


}


export default withStyles(styles)(AboutMe)
