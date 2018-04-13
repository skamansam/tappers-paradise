import React, { Component } from 'react';
import IncomeGenerator from './IncomeGenerator';
import PropTypes from 'prop-types';
//import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Stage from './Stage';


const styles = theme => ({});

class GameBoard extends Component {
  render() {
    return (
      <div className="game-board">
        <Stage/>
        <IncomeGenerator/>
      </div>
    );
  }
}
GameBoard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(GameBoard);
