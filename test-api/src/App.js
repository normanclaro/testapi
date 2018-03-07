import React, { Component } from 'react';
import './App.css';
import ApiFetch from './components/ApiFetch.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test API</h1>
        </header>
        <ApiFetch />
      </div>
    );
  }
}

export default App;
