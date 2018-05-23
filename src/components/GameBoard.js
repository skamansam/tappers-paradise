import React, { Component } from 'react';
import IncomeGenerator from './IncomeGenerator';
import PropTypes from 'prop-types';
//import Typography from 'material-ui/Typography';
//import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles } from 'material-ui/styles';
import Stage from './Stage';


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

class GameBoard extends Component {
  state = {
    universe_url: '/universes/landlord.json',
    universe: {
      resources: {}
    },
    worlds: [{
      generators: [],
    }],
    bonuses: [],
    errors: "",
    totals: [],
    selectedWorldId: 0
  }

  componentDidMount() {
    this.loadUniverse();
  }

  loadUniverse() {
    fetch(this.state.universe_url)
      .then(result => result.json())
      .then(
        (result) => {
          this.setState( (prevState, _props) => {
            return {
              ...prevState,
              universe: result.universe,
              worlds: result.worlds,
              bonuses: result.bonuses,
              error: null,
              selectedWorldId: 0
            };
          });
        },
        (error) => {
          this.setState( (prevState, _props) => {
            return { ...prevState, universe: null, error: error };
          });
        }
      )
  }

  addResource = (rezName, rezDelta,b,c) => {
    console.log(rezName, rezDelta)
    this.setState( (prevState, _props) => {
      const newState = {...prevState};
      newState.totals[rezName] = newState.totals[rezName] || 0;
      newState.totals[rezName] += rezDelta;
      return newState;
    });
  }

  onWorldChange = (evt, val) => {
    this.setState( (prevState, cb) => ({ ...prevState, selectedWorldId: val }))
  }

  _buildTabs(worlds, selectedId, onChangeCb, classes){
    if(worlds.length < 2) return "";
    const tabs = worlds.map( world =>
      (<Tab label={world.name} key={world.name} value={world.id} className={classes.tab}/>)
    )
    return (
      <Tabs value={selectedId} onChange={onChangeCb} className={classes.tabBar}>
        {tabs}
      </Tabs>
    )
  }

  render() {
    const { classes } = this.props;
    const currentWorld = this.state.worlds[this.state.selectedWorldId]

    const tabBar = this._buildTabs(this.state.worlds, this.state.selectedWorldId, this.onWorldChange, classes)

    const generators = currentWorld.generators.map( generator =>
      (<IncomeGenerator data={generator} onResourceChange={this.addResource} className={classes.incomeGenerator}/>)
    )

    return (
      <div className={classes.root}>
        <Stage resources={this.state.universe.resources} className={classes.stage}/>
        {tabBar}
        {generators}
      </div>
    );
  }
}
GameBoard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  data: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(GameBoard);
