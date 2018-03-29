import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Field from './components/field';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        score: 0
      }
  }


  render() {
    return (
      <Field score={this.state.score}/>
    );
  }
}

export default App;
