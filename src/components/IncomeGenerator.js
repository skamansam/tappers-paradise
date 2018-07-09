import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
//import Typography from 'material-ui/Typography';
//import { withStyles } from 'material-ui/styles';
//import themeElement from '../themeElement';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
//import Paper from 'material-ui/Paper';
import Timer from './Timer';

const styles = theme => ({
  root: {
  },
});
class IncomeGenerator extends Component {
  constructor(){
    super();
    this.state = {
      buildStarted: false
    }
  }
  buildResource = () =>{
    this.setState({buildStarted: true});
  }

  addResource = () => {
    this.props.onResourceChange('buck', 1.25);
    this.setState({buildStarted: true});
  }

  render() {
    const { data } = this.props;
    return (
      <Card onClick={ () => { this.addResource() } }>
        <h1>Generator: {data && data.name}</h1>
        <Timer started={this.state.buildStarted} onFinish={this.addResource}/>
      </Card>
    );
  }
}

IncomeGenerator.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  onResourceChange: PropTypes.function,
  name: PropTypes.string
};


export default withStyles(styles, { withTheme: true })(IncomeGenerator);
