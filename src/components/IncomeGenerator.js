import React, { Component } from 'react';
import Card from 'material-ui/Card';
//import Typography from 'material-ui/Typography';
//import { withStyles } from 'material-ui/styles';
//import themeElement from '../themeElement';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
//import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
  },
  stage: {
  },
  appBar:{
    marginTop: '30px',
  },
  tabBar:{
    marginTop: '30px',
  },
  tab:{

  }
});
class IncomeGenerator extends Component {

  addResource = () => {
    this.props.onResourceChange('buck', 1.25);
  }

  render() {
    const { data } = this.props;
    return (
      <Card onClick={ () => { this.addResource() } }>
        <h1>Generator: {data && data.name}</h1>
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
