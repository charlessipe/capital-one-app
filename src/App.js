import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz.jsx';
import Charities from './Charities/Charities';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Capital One App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h2>Choose a Charity</h2>
        <Charities className="float-left" charitiesName="Operation Code"/><Charities className="float-left" charitiesName="Seattle Childrens"/>

        <button type="button" className="btn btn-primary">Start Donating</button>
        <p>Amount to Donate Each Day</p>
        <p>$5</p>
        <p>$1</p>
        <p>Other</p>

        <h2>You have donated for X days</h2>
        <h2>You have donated a total of X to XCharity</h2>

      </div>
    );
  }
}

export default App;
