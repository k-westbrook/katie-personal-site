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
    marginBottom: "2vh"
  },
  aboutMe:
  {

    fontSize: "2.5vh",
    color: "#FFFFFF",
    marginLeft: "3vw",
    marginTop: "3vh",
    padding: "2vw",
    paddingBottom: "5vh"
  },
  subTitles:
  {
    fontSize: "5vh",
    color: "#FFFFFF",
    marginLeft: "3vw",
    marginTop: "2vh"

  }

};

class AboutMeMobile extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div >

        <div className={classes.resumeContainer}>
          <div className={classes.titleHeaderContainer}>

            <Typography variant='h1' className={classes.mainTitle}>About Me</Typography>
          </div>
          <div>
            <div>
              <Typography variant="h3" className={classes.subTitles}>Summary</Typography>
            </div>
            <div className={classes.aboutMe}>
              <Typography variant="p"  >Hello! I am a fullstack developer who has a penchant for front end software engineering. I began my professional journey to software engineering by taking onlince classes in basic SQL. After a few months of a Android Basics class, I applied and got accepted to Grace Hopper Program at Fullstack Academy in NYC. To be accepted, you need to not only pass a coding challenge but a live technical interview.<br /><br />
                At the immersive coding bootcamp, I was able to learn and apply the fullstack<b><i> (JavaScript, React/Redux, PostgreSQL, Sequelize/ORM, and NodeJS/Express).</i></b> I then finished the Microsoft LEAP Apprenticeship Program which is like an internship for people not generally represented in tech. Even though my apprenticeship was on a backend team that dealt with using PowerBI and t-SQL for internal services, I continued to work on personal project (Fullstack web apps) to utilize on my skills. I enjoy using all aspects of technology and am excited to build my own projects. During these projects, I've expanded my skills to learn AWS and other technologies <br /><br />
                Skills: <b>JavaScript, React, Redux, NodeJS</b> AWS Lambda, AWS API Gateway, SQL, PostgreSQL, DyanmoDB , AWS S3, Sequelize, MongoDB, Heroku,Git, some MaterialUI<br /><br />
                Please contact me at <u>kcheriewestbrook@gmail.com</u> to discuss job opportunities or networking associations (I would love to work with others who share my passion!)</Typography>

            </div>
          </div>

        </div>
      </div >
    )
  }


}


export default withStyles(styles)(AboutMeMobile)
