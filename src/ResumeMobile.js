import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing, border } from '@material-ui/system';
import keyboard from './keyboard.jpg';
import coding from './coding.jpg'
import books from './books.jpg'
import Typography from '@material-ui/core/Typography';
import CropDinIcon from '@material-ui/icons/CropDin';

const styles = {

  resumeContainer: {
    width: "100vw",
    marginTop: "8vh",
    paddingTop: "1vh"
  },
  mainTitle:
  {
    fontSize: "8vh",
    textAlign: "center",
    marginTop: "3vh",
    color: "#FFFFFF",
    marginBottom: "2vh",
    borderBottomStyle: "solid",
    paddingBottom: "2vh"
  },
  subTitles:
  {
    fontSize: "5vh",
    color: "#FFFFFF",
    marginLeft: "3vw",
    marginTop: "2vh"

  },
  list:
  {
    color: "#FFFFFF",
    fontSize: "3vh",
    display: "flex",
    flexDirection: "column",
    marginTop: "3vh",
    marginLeft: "1vw",
    width: "90vw"
  },
  listItem:
  {
    color: "#FFFFFF",
    fontSize: "2vh",
    marginBottom: "3vh",
    display: "flex",
    flexDirection: "row",
    width: "90vw",

  },

};


class ResumeMobile extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div >

        <div className={classes.resumeContainer}>
          <div className={classes.titleHeaderContainer}>

            <Typography variant='h1' className={classes.mainTitle}>Resume</Typography>
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
                <div >
                  <div >
                    <Typography variant='p'>Software Engineer Apprentice</Typography>
                  </div>
                  <div >
                    <Typography variant='p'>
                      Microsft via Inconsulting Inc.</Typography>
                  </div>
                  <div >
                    <Typography variant='p'>April 2019 - August 2019</Typography>
                  </div>



                </div>
              </div>
              <div className={classes.listItem}>
                <div>
                  <CropDinIcon />
                </div>
                <div >

                  <div >
                    <Typography variant='p'>Licensing Analyst II</Typography>
                  </div>
                  <div >
                    <Typography variant='p'>
                      Microsft via Artech Consulting LLC</Typography>
                  </div>

                  <div >
                    <Typography variant='p'>February 2017 - September 2018</Typography>
                  </div>
                </div>
              </div>
              <div className={classes.listItem}>
                <div>
                  <CropDinIcon />
                </div>
                <div >
                  <div >
                    <Typography variant='p'>Market Research Intern</Typography>
                  </div>
                  <div >
                    <Typography variant='p'>
                      Bairexport</Typography>
                  </div>

                  <div >
                    <Typography variant='p'>May 2016 - June 2016</Typography>
                  </div>



                </div>
              </div>

            </div>

            <div>
              <Typography variant="h3" className={classes.subTitles}>Education</Typography>
            </div>
          </div>
        </div>

        <div className={classes.list}>

          <div className={classes.listItem}>
            <div>
              <CropDinIcon />
            </div>
            <div >
              <div className={classes.jobTitle} >
                <div >
                  <div >
                    <Typography variant='p'>Fullstack Academy</Typography>
                  </div>
                  <div >
                    <Typography variant='p'>
                      Immersive Fullstack Software Engineering Program</Typography>
                  </div>
                </div>
                <div >
                  <Typography variant='p'>February 2019</Typography>
                </div>

              </div>
            </div>
          </div>

          <div className={classes.listItem}>
            <div>
              <CropDinIcon />
            </div>
            <div >
              <div className={classes.jobTitle} >
                <div >
                  <div >
                    <Typography variant='p'>Texas A&M University</Typography>
                  </div>
                  <div >
                    <Typography variant='p'>
                      Bachelor of Science in Biology</Typography>
                  </div>
                </div>
                <div >
                  <Typography variant='p'>May 2010</Typography>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div >
    )
  }


}


export default withStyles(styles)(ResumeMobile)
