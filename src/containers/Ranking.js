import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChallengers } from '../actions';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import './HelloApi.scss';

class Ranking extends Component {
  
  componentWillMount () {
    this.props.fetchChallengers();
  }

  renderChallengers(){
    let challengers = _.orderBy(this.props.challengers.filter((item)=>item.time != ""), ['time','attempts'],['asc','asc']);
    return challengers.map((item,index) => {
      return (
        <li key={item.id}>
           <span className="HelloApi-list-item-title">#{index+1}</span>
           <span className="HelloApi-list-item-title">{item.name}</span>
           <span className="HelloApi-list-item-title">{item.time}</span>
           <span className="HelloApi-list-item-title">{item.attempts} intentos</span>
        </li>
      )
    });
  }
  
  render () {
    return (
      <Grid className="helloApi">
      <Row>
        <Col sm={8} smOffset={2}>
          <h3>Challengers</h3>
          <hr/>
          <ul className="HelloApi-list list-group">
              {this.renderChallengers()}
          </ul>
        </Col>
      </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return { challengers:state.challengers.all }
}

export default connect(mapStateToProps,{ fetchChallengers })(Ranking);
