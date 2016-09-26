import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SignUp from '../containers/SignUp';
import './Start.scss';

const Start = () =>{
   return(
     <Grid className="form-container">
       <Row>
         <Col className="divider" sm={6} >
           <SignUp />
         </Col>
         <Col sm={4} smOffset={2}>Login</Col>
      </Row>
     </Grid>

   )
}

export default Start;