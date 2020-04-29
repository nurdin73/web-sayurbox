import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
// import { setLogin } from '../../../_actions/login';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
      photo: ''
    }
  }
  render() {
    const { profile, isLoading, error } =
      this.props.profile
    console.log(this.props.profile)
    if (isLoading) {
      return (
        <div>
          <h1>..............................</h1>
        </div>
      );
    }
    if (error) {
      return (
        <div>
          <h1>ERROR</h1>
        </div>
      );
    }


    // if (localStorage.getItem('token') !== null) {
    //   return <Redirect to={{ pathname: 'dashboard' }} />
    // }
    if (profile.status === "success") {
      console.log(profile.data.name);
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
                  <h2>{profile.data.name}</h2>
                  <img src="https://jncheli.co.za/wp-content/uploads/2016/10/profile-pict-circle.png" className="img-avatar" alt="adminProfilePhoto" style={{ height: 200, justify: "center", display: "block", margin: "0 auto" }}></img>
                  <p>{profile.data.email}</p>
                  <p>{profile.data.phoneNumber}</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
  }
}

export default connect(mapStateToProps)(Profile);
