import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { sizing, border } from '@material-ui/system';

const styles =
{
  title: {
    marginTop: "11vh",
    paddingTop: "4vh",
    paddingLeft: "3vw"
  }

}
class Projects extends Component {

  constructor() {
    super()

  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 className={classes.title}>
          Projects
        </h1>
      </div>
    )
  }
}

export default withStyles(styles)(Projects);


