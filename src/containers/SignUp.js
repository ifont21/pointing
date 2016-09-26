import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'react-bootstrap';
import { createChallenger } from '../actions/index';
import { Link } from 'react-router';
import cookie from 'react-cookie';

class SignUp extends Component {
  
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props){
    this.props.createChallenger(props)
        .then(()=>{
          this.context.router.push('/begin');
        });
    cookie.save('username',props.username);  
  }
  
  render () {
    const { fields: { name, username, time, date, attempts },handleSubmit } = this.props;
  return (  
    <div>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
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
          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
    </div>
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