import React, { Component } from 'react';
import Card from 'material-ui/Card';
//import Typography from 'material-ui/Typography';
//import { withStyles } from 'material-ui/styles';
import themeElement from '../themeElement';
//import Paper from 'material-ui/Paper';
class IncomeGenerator extends Component {

  clickie() {
    console.log('Calling clickie()');
    this.props.onClickie('HI!');
    this.props.nonono();
    console.log('Called clickie()');
  }
  render() {
    const { data } = this.props;
    return (
      <Card onClick={ () => { this.clickie() } }>
        <h1>Generator: {data && data.name}</h1>
      </Card>
    );
  }
}

export default themeElement(IncomeGenerator);
