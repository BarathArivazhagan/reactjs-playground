import React, { Component } from 'react';
import './App.css';
import Home from './app/components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">         
        </header>
        <div className="row">
          <Home/>
        </div>
      </div>
    );
  }
}

export default App;
