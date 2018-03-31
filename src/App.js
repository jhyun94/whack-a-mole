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
        },
        bestScore: 0
      }
    this.start = this.start.bind(this);
  }
  start(){
    this.setState({play: true})
    setTimeout( () => {
      this.setState({finished: true, play: false });
      clearInterval(peep);
      this.checkBestScore();
    }, 5000)
    const peep = setInterval( () => {
      this.molePop()
    }, 1000)
  }

  generateHole(){
    let holes = [];
    for( var i = 1; i <= 3; i++){
      holes.push(
        <Hole key={i}
         mole={this.state.moles[i]} 
         holeNumber={i}
         sendNumber={ (number) => this.moleRecover(number)}
         onMoleSmack={ ()=> this.smacked() }/>)
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

  moleRecover(number){
    let moles = this.state.moles;
    moles[number] = false;
    this.setState({ moles: moles});
  }

  smacked(){
    const num = this.state.score + 1;
    this.setState({score: num})
  }

  checkBestScore(){

    if( this.state.score > this.state.bestScore) {
      this.setState({ bestScore: this.state.score})
    }
  }

  render() {
    return (
      <div className="field-bg">
        <Score score={this.state.score} bestScore={this.state.bestScore}/>
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
