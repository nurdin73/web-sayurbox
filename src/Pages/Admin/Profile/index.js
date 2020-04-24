import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

class Profile extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        {/* Content in here */}
        <h1>PROFILE</h1>
        <Row>
          <Col>
            <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Daftar Pembeli
              </CardHeader> */}
              <CardBody>
                <h2>Admin Suradmin</h2>
                <img src="https://jncheli.co.za/wp-content/uploads/2016/10/profile-pict-circle.png" className="img-avatar" alt="adminProfilePhoto" style={{height:200, justify:"center"}}></img>
                <p>am</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
