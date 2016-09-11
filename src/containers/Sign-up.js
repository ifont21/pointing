import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { createChallenger } from '../actions/index';

class SignUp extends Component {
  render () {
    const { fields: { name, username, time, date, attempts },handleSubmit } = this.props;
  return (  
    <form onSubmit={handleSubmit(this.props.createChallenger)} >
      <h3>Register and let's get started</h3>
       <FormGroup controlId="nameGroup" bsSize="sm">
        <ControlLabel>Name</ControlLabel>
        <FormControl 
         type="text"
         placeholder="Enter you fullname"
         {...name}
        /> 
       </FormGroup>
       <FormGroup controlId="usernameGroup" bsSize="sm">
        <ControlLabel>Username</ControlLabel>
        <FormControl 
         type="text"
         placeholder="challenger21"
         {...username}
        /> 
       </FormGroup>
       <button type="submit" className="btn btn-primary">Register</button>
    </form>
    )
  }
}

export default reduxForm({
  form:'ChallengerNewForm',
  fields:['name','username','time','date','attempts'],
  initialValues:{
    time: '',
    date: '',
    attempts: ''
  }
},null,{ createChallenger })(SignUp);