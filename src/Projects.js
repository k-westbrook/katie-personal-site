import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { sizing, border } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';

const styles =
{
  projectPageContainer: {
    marginTop: "11vh",
    padding: '5vh'
  }

}
class Projects extends Component {

  constructor() {
    super()

  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.projectPageContainer}>
        <div>
          <Paper>Hello</Paper>

        </div>
        <h1>
          Projects
        </h1>
      </div>
    )
  }
}

export default withStyles(styles)(Projects);


