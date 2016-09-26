import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pointing</h2>
        </div>
        <ul className="App-nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/ranking">Challengers Ranking</Link></li>
          <li><Link to="/start">Get started</Link></li>
        </ul>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
