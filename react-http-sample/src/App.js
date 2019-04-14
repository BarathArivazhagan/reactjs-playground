import React, { Component } from 'react';
import './App.css';
import { Home } from './app/components/Home';

class App extends Component {
  render() {
    return (
      <div className="App contianer-fluid">
        <Home/>
      </div>
    );
  }
}

export default App;
