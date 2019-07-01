import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
//import Typography from 'material-ui/Typography';
//import { withStyles } from 'material-ui/styles';
//import themeElement from '../themeElement';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
//import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
  }
});
class Timer extends Component {
  state = {
    completed: 0,
    buffer: 0,
    tickDuration: 100
  }
  timer = null;

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount = () => {
    this._handleTimerUpdates();
  }

  _handleTimerUpdates = () => {
    if(this.props.started && this.timer == null){
      this.timer = setInterval(this.progress, this.state.tickDuration);
    }else if(!this.props.started){
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    this._handleTimerUpdates();
  }

  progress = () => {
    const { completed } = this.state;
    const nextTickValue = this.props.duration / this.state.tickDuration
    if (completed >= 100) {
      this.setState({ completed: 0 }, () => this.props.onFinish() );
    } else {
      this.setState({ completed: completed + nextTickValue})
    }
  };

  render() {
    const {completed, buffer} = this.state;
    const label = (
      <label>{completed}</label>
    )
    return (
      <div>
        {label}
        <LinearProgress variant="determinate" value={completed} valueBuffer={buffer} />
      </div>
    );
  }
}

Timer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  onFinish: PropTypes.func,
  displayCount: PropTypes.bool,
  displayPercentage: PropTypes.bool,
  started: PropTypes.bool,
  duration: PropTypes.number
};


export default withStyles(styles, { withTheme: true })(Timer);
