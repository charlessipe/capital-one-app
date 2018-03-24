import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz.jsx';
import Charities from './Charities/Charities';



class App extends Component {

  constructor(props){
    super(props);

    //this.addNote = this.addNote.bind(this);

    this.state = {
      charities: ["School for Kids Who Can't Read Good and Want to Do Other Stuff Good Too", "Childrens Hospital","Operation Code"]
    }
  }

  componentDidMount() {

    fetch('https://api.data.charitynavigator.org/v2/Organizations?app_id=d5e3f2cf&app_key=088acd946a28926a3c1da010e845be92&rated=true&state=WA&zip=98103&sort=RATING')
      .then(response => response.json()
      )

    }



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
              <h2>Sign Up for a Checking Account</h2>

              <form>
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" placeholder="Enter first name"></input>
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Enter last name"></input>
                <label for="dateOfBirth">Date of Birth*</label>
                <input type="text" class="form-control" id="dateOfBirth" placeholder="XXXX-XX-XX"></input>
                <label for="socialSecurityNumber">SSN*</label>
                <input type="text" class="form-control" id="socialSecurityNumber" placeholder="SSN*"></input>
                <label for="citizenshipCountry">Citizenship Country</label>
                <input type="text" class="form-control" id="citizenshipCountry" placeholder="Citizenship Country"></input>
                <label for="secondaryCitizenshipCountry">Seconday Citizenship Country</label>
                <input type="text" class="form-control" id="secondaryCitizenshipCountry" placeholder="Secondary Citizenship Country"></input>
                <label for="employmentStatus">employment Status</label>
                <input type="text" class="form-control" id="employmentStatus" placeholder="Employment Status*"></input>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>

              <h2>Choose a Charity</h2>
              <div class="form-group">
                <label for="exampleSelect2">Example multiple select</label>
                <select multiple="" class="form-control" id="exampleSelect2">
                  <option>ADA</option>
                  <option>TAF</option>
                  <option>School for Kids Who Cant Read Good and Want to Do Other Stuff Good Too</option>
                  <option>Operation Code</option>
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
