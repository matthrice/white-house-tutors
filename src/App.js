import React, { Component } from 'react';
import './App.css';
import { Header, InfoColumn } from './components';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <InfoColumn />
      </div>
    );
  }
}

export default App;
