import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Field from './components/field';
import Hole from './components/hole';
import Score from './components/score';
import PlayButton from './components/play-button';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        score: 0
      }
  }


  render() {
    return (
      <div className="field-bg">
        <Score score={this.state.score}/>
        <PlayButton />
        <Hole />
      </div>
    )
  }
}

export default App;
