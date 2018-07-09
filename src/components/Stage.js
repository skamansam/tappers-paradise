import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import logo from '../img/tappers-paradise-logo.svg';
import '../css/animations.css';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
  logo: {
    animation: 'rotate-ccw infinite 20s linear',
    height: '80px',
  },
  header: {
    textAlign: 'center',
//    backgroundColor: '#222',
//    height: '150px',
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

  render = () => {
    const { classes, resources } = this.props;
    console.log("Stage resources:", resources);
    const resourceList = (resources.keys || []).map( (rezKey) => (
      <ListItem key={resources[rezKey].id}>
        <ListItemIcon>
          <Icon>{resources[rezKey].icon}</Icon>
        </ListItemIcon>
        <ListItemText>
          {rezKey}
        </ListItemText>
      </ListItem>
    ) );

    return (
      <Paper elevation={6} className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <List dense>
          {resourceList}
        </List>
        <h1 className={classes.title}>&lt; This is where the action happens! &gt;</h1>
      </Paper>
    );
  }
}
Stage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  resources: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(Stage);
