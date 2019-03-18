import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from "./components/ListContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>List of things</h1>
          </div>
          <ListContainer />
      </div>
    );
  }
}

export default App;
