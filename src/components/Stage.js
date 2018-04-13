import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
//import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import logo from '../img/tappers-paradise-logo.svg';
import '../css/animations.css';


const styles = theme => ({
  logo: {
    animation: 'rotate-ccw infinite 20s linear',
    height: '80px',
  },
  header: {
    textAlign: 'center',
//    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
//    color: 'white',
  },
  title: {
    fontSize: '1.5em',
  },
  intro: {
    fontSize: 'large',
  },
});

class Stage extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Paper elevation="6" className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <h1 className={classes.title}>&lt; This is where the action happens! &gt;</h1>
      </Paper>
    );
  }
}
Stage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Stage);
