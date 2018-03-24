import React, { Component } from 'react';
import './Charities.css';

class Charities extends Component {

  constructor(props){
    super(props);
    this.charitiesName=props.charitiesName;

  }

  render(props){
    return(
      <div>
        <button className="charity" className="btn btn-info">{this.props.charitiesName}</button>
      </div>
    )
  }

}


export default Charities;
