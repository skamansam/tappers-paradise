
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import logo from '../img/tappers-paradise-logo.svg';
import '../css/animations.css';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
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
  resourceValue: {
    color: '#00aa00',
  },
  resourceName: {
    color: '#00aa00',
    paddingLeft: '1ex'
  }
});

class Stage extends Component {
  state = {
    resources: {},
    universeName: '',
    totals: {}
  }
  componentWillReceiveProps = (newProps) => {
    this.setState({
      resources: newProps.resources,
      totals: newProps.totals,
      universeName: newProps.universeName
    })
  }
  render = () => {
    const { classes, resources, totals } = this.props;
    const resourceKeys = Object.keys(resources) || []
    const resourceList = resourceKeys.map( (rezKey) => (
      <ListItem key={resources[rezKey].id}>
        <ListItemIcon>
          <Icon>{resources[rezKey].icon}</Icon>
        </ListItemIcon>
        <ListItemText>
          <span className={classes.resourceValue}>{totals[rezKey] || 0.00}</span>
          <span className={classes.resourceName}>{resources[rezKey].plural_name}</span>
        </ListItemText>
      </ListItem>
    ) );
    return (
      <Paper elevation={6} className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <List dense>
          {resourceList}
        </List>
        <h1 className={classes.title}>{this.state.universeName}</h1>
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
