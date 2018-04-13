import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
// import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
// import Hidden from 'material-ui/Hidden';
// import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 240;

const styles = theme => ({
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
});

class AppHeader extends Component {

  state = {
    title: "Tapper's Paradise",
  };

  handleDrawerToggle = () => {
    if(this.props.onDrawerToggle){
      this.props.onDrawerToggle();
    }
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerToggle}
            className={classes.navIconHide}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            {this.state.title}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func,
  mobileOpen: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(AppHeader);
