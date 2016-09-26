import React, { Component } from 'react'
import { Grid, Row, Col} from 'react-bootstrap';

class InitGame extends Component {
    render () {
        return (
            <Grid>
                <Row>
                <Col sm={4}>
                  <h3>Attempts</h3>
                </Col>
                <Col sm={5}></Col>
                </Row>
            </Grid>
        )
    }
}

export default InitGame;