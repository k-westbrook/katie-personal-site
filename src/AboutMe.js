import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';
import keyboard from './keyboard.jpg';
import Typography from '@material-ui/core/Typography';
const styles = {

  titleContainer:
  {

    marginTop: "11vh",
    display: "flex"

  },
  imageContainer:
  {

    backgroundImage: `url(${keyboard})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    borderStyle: "solid",
    height: "80vh",
    width: "100vw",


  },
  resumeContainer: {
    marginLeft: "3vw"
  },
  mainTitle:
  {
    fontSize: "10vh",
    textAlign: "center",
    marginTop: "3vh",
    color: "#FFFFFF"
  },
  subTitles:
  {
    fontSize: "7vh",
    color: "#FFFFFF"

  },
  list:
  {
    color: "#FFFFFF",
    fontSize: "3vh"
  },
  expeience:
  {
    color: "#FFFFFF",
    fontSize: "3vh"
  }
};


class AboutMe extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div>


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
            <ul className={classes.list}>
              <li>
                <Typography className={classes.expeience} variant='p'>Software Engineer Apprentice
                <br /> Microsft via Inconsulting Inc.</Typography>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }


}


export default withStyles(styles)(AboutMe)
