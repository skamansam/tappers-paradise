import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Hidden from '@material-ui/core/Hidden';
//import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';


const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  listItemText: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: "1rem",
    fontWeight: 400,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: "1.5em"
  },
  currentPage: {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.primary.light,
  }
});

class AppNavigation extends Component {
  state = {
    universes: [],
    error: null
  }

  componentDidMount = () => {
    this.loadUniverses();
  }

  loadUniverses = () => {
    fetch('/universes/universes.json')
      .then(result => result.json())
      .then(
        (result) => {
          this.setState( (prevState, _props) => {
            return {
              ...prevState,
              universes: result.universes
            };
          });
        },
        (error) => {
          this.setState( (prevState, _props) => {
            return { ...prevState, universes: [], error: error };
          });
        }
      )
  }
  

  render = () => {
    const { classes, match } = this.props;

    const items = this.state.universes.map( universe =>
      (<NavLink key={universe.id} activeClassName={classes.currentPage} to={`/universes/${universe.id}`} style={{ textDecoration: 'none', display: 'block' }}>
      <ListItem button>
        <ListItemIcon>
          <Icon>{universe.icon}</Icon>
        </ListItemIcon>
        <ListItemText disableTypography className={classes.listItemText} inset primary={universe.name} />
      </ListItem></NavLink>)
    )
    const drawer = (
      <List
        component="nav"
        subheader={<ListSubheader component="div">Favorites</ListSubheader>}
      >
      {items}
      </List>
    )
  
    return (
      <div className={classes.root}>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.props.mobileOpen}
            onClose={this.props.onDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    )
  }
}

AppNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func,
  mobileOpen: PropTypes.bool,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(withRouter(AppNavigation));
