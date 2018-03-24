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
          <h1 className="App-title">Coffee for a Cause</h1>
        </header>
        <p className="App-intro">
          Coffee for a Cause Automatically Transfers $5 per day to your account for each day that you skip buying coffee at a coffee shop.
        </p>

        <div class="container-fluid">
            <div class="col-xs-6">
              <h2>Sign Up</h2>
              <p>sign up form here</p>

              <h2>Choose a Charity</h2>
              <div class="form-group">
                <label for="exampleSelect2">Example multiple select</label>
                <select multiple="" class="form-control" id="exampleSelect2">
                  <option>Operation Code</option>
                  <option>Seattle Childrens</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>


              <button type="button" className="btn btn-primary">Start Donating</button>


              <div class="alert alert-success" role="alert">You have donated for <span><strong>X</strong></span> days</div>
              <div class="alert alert-success" role="info"><h2>You have donated a total of <span>X</span> to XCharity</h2></div>
            </div>
        </div>

      </div>
    );
  }
}

export default App;
