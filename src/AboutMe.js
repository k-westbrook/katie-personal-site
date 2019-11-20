import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing, border } from '@material-ui/system';
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
  aboutMe:
  {
    fontSize: "4vh",
    color: "#FFFFFF",
    marginLeft: "3vw",
    marginTop: "3vh",
    marginBottom: "3vh"
  },
  subTitles:
  {
    fontSize: "7vh",
    color: "#FFFFFF",
    marginLeft: "3vw"

  },
  list:
  {
    color: "#FFFFFF",
    fontSize: "3vh",
    display: "flex",
    flexDirection: "column",
    marginTop: "8vh",
    marginLeft: "3vw",
    width: "80vw"
  },
  listItem:
  {
    color: "#FFFFFF",
    fontSize: "3vh",
    marginBottom: "8vh",
    display: "flex",
    flexDirection: "row",
    width: "80vw",

  },
  jobTitle:
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: " space-between",
    width: "70vw"
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
            <div>
              <Typography variant="h3" className={classes.subTitles}>Summary</Typography>
            </div>
            <div className={classes.aboutMe}>
              <Typography variant="p"  >Hello! I am a fullstack developer who has a penchant for front end software engineering. I began my professional journey to software engineering by taking onlince classes in basic SQL. After a few months of a Android Basics class, I applied and got accepted to Grace Hopper Program at Fullstack Academy in NYC. To be accepted, you need to not only pass a coding challenge but a live technical interview.<br /><br />
                At the immersive coding bootcamp, I was able to learn and apply the fullstack<b><i> (JavaScript, React/Redux, PostgreSQL, Sequelize/ORM, and NodeJS/Express).</i></b> I then finished the Microsoft LEAP Apprenticeship Program which is like an internship for people not generally represented in tech.</Typography>

            </div>
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
                  <div className={classes.jobTitle} >
                    <div >
                      <div >
                        <Typography variant='p'>Software Engineer Apprentice</Typography>
                      </div>
                      <div >
                        <Typography variant='p'>
                          Microsft via Inconsulting Inc.</Typography>
                      </div>
                    </div>
                    <div >
                      <Typography variant='p'>April 2019 - August 2019</Typography>
                    </div>

                  </div>
                  <div>
                    <Typography variant='p'>• Implemented t-SQL and Kusto queries to provide data set for Azure Recommendations Dashboard.<br />
                      • Created relationships between models and modified existing PowerBI Dashboard to show additional data.<br />
                      • Collaborated with engineering team and project managers to plan sprint stories and system design.<br />
                      • Presented technical information at organization wide meeting as well as demo features at immediate team's end of sprint meetings.
                    </Typography>
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
                        <Typography variant='p'>Licensing Analyst II</Typography>
                      </div>
                      <div >
                        <Typography variant='p'>
                          Microsft via Artech Consulting LLC</Typography>
                      </div>
                    </div>
                    <div >
                      <Typography variant='p'>February 2017 - September 2018</Typography>
                    </div>

                  </div>
                  <div>
                    <Typography variant='p'>• Leveraged Excel to develop, process, and analyze highly customized multi-million-dollar volume licensing financial contracts based on customer's specific needs and deadlines.<br />
                      • Analyzed and reviewed agreements to ensure maintenance of quality and meet established compliance policies in a dynamic technology atmosphere.<br />
                      • Mentored new hires and improved internal education materials to streamline training process.<br />
                      • Conducted user acceptance testing for functional modifications of application and reported findings and recommendations.
                    </Typography>
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
                        <Typography variant='p'>Market Research Intern</Typography>
                      </div>
                      <div >
                        <Typography variant='p'>
                          Bairexport</Typography>
                      </div>
                    </div>
                    <div >
                      <Typography variant='p'>May 2016 - June 2016</Typography>
                    </div>

                  </div>
                  <div>
                    <Typography variant='p'>• Maintained website and social media platform used to inform customers of current events.<br />
                      • Troubleshot technical data entry issues with client lists on email marketing platform.<br />
                      • Revised client list to identify potential leads to expand reach.<br />
                      • Investigated and created database for outreach of international importers.<br />
                      • Promoted government financial program for entrepreneurs as company representative at a design expo
                    </Typography>
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


export default withStyles(styles)(AboutMe)
