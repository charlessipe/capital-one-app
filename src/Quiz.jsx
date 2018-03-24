import React, { Component } from 'react';

class Quiz extends Component {

  constructor(props){
    super(props);
    this.quizQuestion=props.quizQuestion;
    
  }

  render(props){
    return(
      <div>
        <button type="button" className="btn btn-primary">{this.props.quizQuestion}</button>
      </div>
    )
  }

}


export default Quiz;
