import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

class Page500 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <span className="clearfix">
                <h1 className="float-left display-3 mr-4">{this.props.statusCode}</h1>
                <h4 className="pt-3">{this.props.message}</h4>
                <p className="text-muted float-left">{this.props.error}</p>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page500;
