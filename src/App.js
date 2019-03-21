import React, { Component } from 'react';
import Main from "./Main";
import './App.css';
import './Header.js';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
