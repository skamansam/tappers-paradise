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

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
});

class AppNavigation extends Component {
  render = () => {

    const { classes } = this.props;

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
};

export default withStyles(styles, { withTheme: true })(AppNavigation);
