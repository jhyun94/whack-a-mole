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
        score: 0,
        play: false,
        finished: false,
        moles: {
          1: false,
          2: false,
          3: false
        }
      }
    this.start = this.start.bind(this);
  }
  start(){
    this.setState({play: true})
    setTimeout( () => {
      this.setState({finished: true, play: false });
      clearInterval(peep);
    }, 5000)

    const peep = setInterval( () => {
      this.molePop()
    }, 1000)
  }

  generateHole(){
    let holes = [];
    for( var i = 1; i <= 3; i++){
      holes.push(
        <Hole key={i} mole={this.state.moles[i]} holeNumber={i}/>)
    }
    return holes;
  }

  molePop(){
    let moles = this.state.moles;
    let num = Math.floor( Math.random() * 3 + 1);
    if (moles[num] === false){
      moles[num] = true
    }
    this.setState({ moles: moles})
  }

  render() {
    return (
      <div className="field-bg">
        <Score score={this.state.score}/>
        <PlayButton play={this.state.play}
          onButtonClick={this.start}
          finished={this.state.finished}
        />
        {this.generateHole()}
      </div>
    )
  }
}

export default App;
