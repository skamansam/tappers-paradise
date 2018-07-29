import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppNavigation from './App/AppNavigation';
import AppHeader from './App/AppHeader';
import GameBoard from './GameBoard';
import { theme as mainTheme } from '../themeElement';
import { BrowserRouter as Router } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    marginBottom: '40px',
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
    padding: `0px ${theme.spacing.unit * 3}px`,
  },
});

class App extends Component {
  state = {
    mobileOpen: false,
    universe_url: '/universes/landlord.json'
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  setUniverseUrl = (url) => {
    console.info(`App: Loading URL: ${url}`)
    this.setState({universe_url: url})
  };

  render() {
    const { classes } = this.props;

    return (
      <Router basename='/'>
      <MuiThemeProvider theme={mainTheme}>
        <CssBaseline />
        <div className={classes.root}>
          <AppHeader onDrawerToggle={this.handleDrawerToggle}/>
          <AppNavigation mobileOpen={this.state.mobileOpen} onDrawerToggle={this.handleDrawerToggle} onNavigationChange={this.setUniverseUrl}/>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <GameBoard universe_url={this.state.universe_url}/>
          </main>
        </div>
      </MuiThemeProvider>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
