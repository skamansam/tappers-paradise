import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import AppNavigation from './App/AppNavigation';
import AppHeader from './App/AppHeader';
import GameBoard from './GameBoard';
import Typography from 'material-ui/Typography';
//import { withStyles } from 'material-ui/styles';
import { theme as mainTheme } from '../themeElement';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
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

class App extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <MuiThemeProvider theme={mainTheme}>
        <CssBaseline />
        <div className={classes.root}>
          <AppHeader onDrawerToggle="{handleDrawerToggle}"/>
          <AppNavigation mobileOpen="{state.mobileOpen}"/>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
            <GameBoard/>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
