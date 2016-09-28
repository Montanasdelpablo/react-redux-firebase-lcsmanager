import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

import * as firebase from 'firebase';

import LoginSuccess from './LoginContainer/LoginSuccess';


const config = {
   apiKey: "AIzaSyDR2Trb0dB3Z66LK4dgL2jKTRJj-d_fbN4",
   authDomain: "lcs-manager-b31e5.firebaseapp.com",
   databaseURL: "https://lcs-manager-b31e5.firebaseio.com",
   storageBucket: "lcs-manager-b31e5.appspot.com",
   messagingSenderId: "456327180030"
 };
 firebase.initializeApp(config);

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
      signUpSuccess: false,
      logInSuccess: false,
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.submitSignup = this.submitSignup.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
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
    var that = this

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error, authData) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (error) {
        switch(errorCode) {
          case "INVALID_EMAIL":
            console.log("The specified user account email is invalid.");
            break;
          case "INVALID_PASSWORD":
            console.log("The specified user account password is incorrect.");
            break;
          case "INVALID_USER":
            console.log("The specified user account does not exist.");
            break;
          default:
            console.log("Error logging user in:", error);
        }
      } else {
          console.log("Authenticated successfully with payload:", authData);
      }
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          that.setState({
            logInSuccess: true
          })
        } else {
          // No user is signed in.
          console.log("You are not logged in")
        }
      });
  }

  submitSignup() {
    var email = this.state.email
    var password = this.state.password
    var that = this

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error, authData) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)

      if (error) {
        switch(errorCode) {
          case "EMAIL_TAKEN":
            console.log("The specified user account email is already taken.");
            break;
          case "INVALID_EMAIL":
              console.log("The specified user account email is not a valid email.");
              break;
          case "INVALID_ARGUMENTS":
              console.log("The specified user account password should be atleast 8 characters.");
              break;
          default:
            console.log("Error signing up:", error);
        }
      } else {
        that.setState({
          signUpSuccess: true
        })
        console.log("Signed up successfully with payload:", authData);
      }
    });
  }

  submitPasswordForgotten() {
    var email = this.state.email
    var password = this.state.password


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
        <LoginSuccess display={this.state.logInSuccess}/>
        <br />
        <br />




        <RaisedButton style={buttonStyles}
                      secondary={true}
                      onClick={() => this.changeSignUp(true)}
                      label="Sign up" />
        <FlatButton style={buttonStyles}
                      secondary={true}
                      onClick={() => this.changeForgotPassword(true)}
                      label="Forgot password?" />
        <RaisedButton style={buttonStyles}
                      primary={true}
                      className="btn btn-primary"
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

        {this.signupSuccess}

        <RaisedButton style={buttonStyles}
                      secondary={true}
                      onClick={() => this.changeSignUp(false)}
                      label="Go back"/>
        <RaisedButton style={buttonStyles}
                      primary={true}
                      onClick={() => this.submitSignup()}
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
                      secondary={true}
                      onClick={() => this.changeForgotPassword(false)}
                      label="Go back"/>
        <RaisedButton style={buttonStyles}
                      primary={true}
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
