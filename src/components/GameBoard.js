import React, { Component } from 'react';
import IncomeGenerator from './IncomeGenerator';
//import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import themeElement from '../themeElement';
import logo from '../img/tappers-paradise-logo.svg';
import '../css/App.css';


const styles = theme => ({});

class GameBoard extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tapper's Paradise</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <IncomeGenerator/>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(GameBoard);
