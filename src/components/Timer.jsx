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

  constructor(){
    super();
    this.state = {
      completed: 0,
      itemsPerComplete: 1,
      buffer: 0,
      duration: 5000,
      tickDuration: 500
    }
  }

  componentDidMount = () => {
    if(this.props.started){
      this.timer = setInterval(this.progress, 500);
    }
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({started: newProps.started, duration: newProps.duration, tickDuration: newProps.tickDuration})
  }

  progress = () => {
    const { completed } = this.state;
    const nextTickValue = this.state.duration / this.state.tickDuration
    if (completed >= 100) {
      this.setState({ completed: 0 });
      this.onFinish();
    } else {
      this.setState({ completed: completed + nextTickValue});
    }
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <LinearProgress variant="buffer" value={this.completed} valueBuffer={this.buffer} />
      </div>
    );
  }
}

Timer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  onFinish: PropTypes.function,
  onCountDownFinish: PropTypes.function,
  displayCount: PropTypes.boolean,
  displayPercentage: PropTypes.boolean,
  started: PropTypes.boolean
};


export default withStyles(styles, { withTheme: true })(Timer);
