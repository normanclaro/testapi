import React, { Component } from 'react';
import './App.css';
import ApiFetch from './components/ApiFetch.js'
import ApiFetch2 from './components/ApiFetch2.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test API</h1>
        </header>
        <ApiFetch />
        <ApiFetch2 />
      </div>
    );
  }
}

export default App;
