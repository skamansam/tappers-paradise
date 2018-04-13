import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
//import AppBar from 'material-ui/AppBar';
//import Toolbar from 'material-ui/Toolbar';
import List, {ListItem, ListItemIcon, ListItemText, ListSubheader} from 'material-ui/List';
//import Typography from 'material-ui/Typography';
//import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
//import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 240;

const styles = theme => ({
  root: {
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class AppNavigation extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  render() {

    const { classes, theme } = this.props;

    const drawer = (
      <List
          component="nav"
          subheader={<ListSubheader component="div">Favorites</ListSubheader>}
        >
          <ListItem button>
            <ListItemIcon>
              <Icon>mail</Icon>
            </ListItemIcon>
            <ListItemText inset primary="Sent mail" />
          </ListItem>
        </List>
    );

    return (
      <div className={classes.root}>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
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
export default withStyles(styles, { withTheme: true })(AppNavigation);
