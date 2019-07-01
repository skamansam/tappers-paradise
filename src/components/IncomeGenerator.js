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
  state = {
    buildStarted: false,
    cost: 1.25,
    produces: {
      unit: 'buck',
      value: 1.25
    }
  }
  
  buildResource = () =>{
    this.setState({buildStarted: true});
  }

  addResource = () => {
    this.props.onResourceChange(this.state.produces.unit, this.state.produces.value);
    // console.info("Generator Data: ", this.props.data)
    this.setState({buildStarted: true});
  }

  render() {
    const { data, count } = this.props;
    const { resource_cost, base_cost, cost_multiplier} = data;
    const { buildStarted } = this.state;
    return (
      <Card onClick={ () => { this.addResource() } }>
        <h1>{count || 0} {data && data.name} owned</h1>
        <div>{`Generating `}</div>
        <Timer displayCount={true} displayPercentage={true} duration={5000} started={buildStarted} onFinish={this.addResource}/>
      </Card>
    );
  }
}

IncomeGenerator.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  onResourceChange: PropTypes.func,
  name: PropTypes.string,
  data: PropTypes.object.isRequired,
  count: PropTypes.number
};


export default withStyles(styles, { withTheme: true })(IncomeGenerator);
