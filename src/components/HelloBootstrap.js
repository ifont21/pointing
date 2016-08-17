import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import './HelloBootstrap.css';

const HelloBootstrap = () => {
  return (
    <Grid className="HelloBootstrap">
      <Row className="HelloBootstrap-intro">
        <Col sm={6} smOffset={3}>
          <p>
            Welcome to the Bootstrap world! See how the grid system is used and happy
            coding. You can find the source of this page at <code>src/components/HelloBootstrap</code>.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={4} smOffset={2}>
          <Panel header="React Bootstrap" bsStyle="success">
            <p>
              React-Bootstrap contains all the regular javascript's bootstrap functionality overwriten
              for React. It doesn't depends on jQuery. You can use it a as any other react component.
            </p>
          <p>
            Check the documentation to learn how to use these components.
          </p>
          <a href="https://react-bootstrap.github.io/">https://react-bootstrap.github.io/</a>
          </Panel>
        </Col>
        <Col sm={4}>
          <Panel header="Notes" bsStyle="warning">
            <p>
              You can also use Bootstrap as usually. This is by adding classes by your self.
              Make sure the component doesn't provide any client side functionality, otherwise it won't work.
            </p>
            <a className="btn btn-info" href="#">A simple button</a>
          </Panel>
        </Col>
      </Row>
    </Grid>
  )
}

export default HelloBootstrap;
