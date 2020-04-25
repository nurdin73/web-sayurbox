import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { setLogin } from '../../../_actions/login';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      errorEmail: '',
      errorPassword: '',
      validEmail: false,
      validPass: false,
      valid1: false,
      valid2: false
    }
  }

  validateEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase())
  }

  handleChangeEmail = (e) => {
    this.setState({email: e.target.value})
  }
  handleChangePassword = (e) => {
    this.setState({password: e.target.value})
  }
  handleSubmit = () => {
    if (this.state.email !== '') {
      if(this.validateEmail(this.state.email)) {
        this.setState({errorEmail: '', valid1: true, validEmail: false})
      } else {
        this.setState({errorEmail: 'email is not valid', validEmail: true})
      }
    } else {
      this.setState({errorEmail: 'field is required', validEmail: true})
    }
    if (this.state.password !== '') {
      if(this.state.password.length < 3) {
        this.setState({errorPassword: 'password too sort', validPass: true})
      } else {
        this.setState({errorPassword: '', valid2: true, validPass: false})
      }
    } else {
      this.setState({errorPassword: 'field is required', validPass: true})
    }


    
    if(this.state.valid1 === true && this.state.valid2 === true) {
      const data = {
        email : this.state.email,
        password: this.state.password
      }
      this.props.setLogin(data);
    }

  }
  render() {
    if (localStorage.getItem('token') !== null) {
      return <Redirect to={{pathname: 'dashboard'}} />
    }
    const login = this.props.login
    if(login.login.status === "success") {
      localStorage.setItem('token', login.login.data.token);
      return <Redirect to={{pathname: 'dashboard'}} />
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col sm="12" md="8" lg="4">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    {login.login.status === "error" ? 
                      <Alert color="danger">
                        Login Failed. please check your account
                      </Alert> : ''
                    }
                    {login.login.status === "success" ? 
                      <Alert color="success">
                        Login success
                      </Alert> : ''
                    }
                    <InputGroup className="">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="email" autoComplete="email" onKeyUp={this.handleChangeEmail} invalid={this.state.validEmail} />
                    </InputGroup>
                    <small className="text-danger">{this.state.errorEmail}</small>
                    <InputGroup className="mt-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="current-password" onKeyUp={this.handleChangePassword} invalid={this.state.validPass} />
                    </InputGroup>
                    <small className="text-danger">{this.state.errorPassword}</small>
                    <Row className="mt-4">
                      <Col xs="6">
                        <Button color="primary" className="px-4" onClick={this.handleSubmit}>Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogin: (data) => {
      dispatch(setLogin(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
