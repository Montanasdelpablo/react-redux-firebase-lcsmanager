import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

import firebase from 'firebase/app';

firebase.initializeApp({
  serviceAccount: {
      projectId: "lcs-manager-b31e5",
      clientEmail: "montanasdelpablo@gmail.com",
      privateKey: "AIzaSyDR2Trb0dB3Z66LK4dgL2jKTRJj-d_fbN4"
    },
  databaseURL: "https://lcs-manager-b31e5.firebaseio.com"
});

const containerStyles = {
  margin: 'auto',
  width: '30%',
  paddingTop: 20,
  paddingBottom: 20,
  textAlign: 'center',
  backgroundColor: 'white',
  position: 'relative',
}

const inputStyles = {
  color: '#3F51B5'
}

const buttonStyles = {
  marginRight: 4,
  marginLeft: 4,
}

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      signUp: false,
      forgotPassword: false,
      email: '',
      password: '',
      updated: false,
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }
  componentWillReceiveProps(props){
    this.replaceState(props)
  }

  changeSignUp(boolean) {
    if (boolean == true) {
      this.setState({
        signUp: true
      })
    }
    else {
      this.setState({
        signUp: false
      })
    }

  }

  changeForgotPassword(boolean) {

    if (boolean == true) {
      this.setState({
        forgotPassword: true
      })
    }
    else {
      this.setState({
        forgotPassword: false
      })
    }

  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
    console.log("Email state field says: " +  this.state.email)
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
    console.log("Password state field says: " + this.state.password)
  }

  submitLogin() {
    var email = this.state.email
    var password = this.state.password

    console.log(email, password)
  }

  submitSignup() {
    var email = this.state.email
    var password = this.state.password

    console.log(email, password)
  }
  submitPasswordForgotten() {
    var email = this.state.email
    var password = this.state.password

    console.log(email, password)
  }


  renderLogin() {
    return (
      <div style={containerStyles} ref="form">
        <h3> Login </h3>

        <TextField
          defaultValue={this.state.email}
          type="text"
          style={inputStyles}
          onChange={this.handleEmailChange}
          ref="email"
          floatingLabelText="E-mail"
          />
        <br />
        <TextField
            defaultValue={this.state.password}
            style={inputStyles}
            onChange={this.handlePasswordChange}
            type="password"
            ref="password"
            floatingLabelText="Password"
          />
        <br />
        <br />
        <br />


        <RaisedButton style={buttonStyles}
                      onClick={() => this.changeSignUp(true)}
                      label="Sign up" />
        <RaisedButton style={buttonStyles}
                      onClick={() => this.changeForgotPassword(true)}
                      label="Forgot password?" />
        <RaisedButton style={buttonStyles}
                      onClick={() => this.submitLogin()}
                                    label="Log in" />

      </div>
    )
  }

  renderSignup() {
    return (
      <div style={containerStyles}>
        <h3> Sign up </h3>

        <TextField
        defaultValue={this.state.email}
        type="text"
        style={inputStyles}
        onChange={this.handleEmailChange}
        ref="email"
        floatingLabelText="E-mail"
          />
        <br />
        <TextField
        defaultValue={this.state.password}
        style={inputStyles}
        onChange={this.handlePasswordChange}
        type="password"
        ref="password"
        floatingLabelText="Password"
          />
        <br />
        <br />
        <br />

        <RaisedButton style={buttonStyles}
                      onClick={() => this.changeSignUp(false)}
                      label="Go back"/>
        <RaisedButton style={buttonStyles}
                      onClick={() => this.submitPasswordForgotten()}
                      label="Sign up now" />


      </div>
    )
  }

  renderForgotPassword() {
    return (
      <div style={containerStyles}>
        <h3> Forgot password? </h3>

        <TextField
        defaultValue={this.state.email}
        type="text"
        style={inputStyles}
        onChange={this.handleEmailChange}
        ref="email"
        floatingLabelText="E-mail"
          />
        <br />
        <br />
        <br />


        <RaisedButton style={buttonStyles}
                      onClick={() => this.changeForgotPassword(false)}
                      label="Go back"/>
        <RaisedButton style={buttonStyles}
                      onClick={() => this.submitPasswordForgotten()}
                      label="Send to E-mail" />


      </div>
    )
  }

  renderNormal() {
    return (
      <div style={containerStyles}>
        <p> Hi, it seems there was an error. Try again in a few minutes. </p>
      </div>
    )
  }



  render() {
    var render;

    if (this.state.loggedIn == false && this.state.signUp == false && this.state.forgotPassword == false) {
      render = this.renderLogin()
    } else if (this.state.loggedIn == false && this.state.signUp == true && this.state.forgotPassword == false) {
      render = this.renderSignup()
    } else if (this.state.loggedIn == false && this.state.signUp == false && this.state.forgotPassword == true) {
      render = this.renderForgotPassword()
    }
    else {
      render = this.renderNormal()
    }

    return render
  }
}
