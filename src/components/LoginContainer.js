import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

import Foundation from 'react-foundation';
import { Row, Column } from 'react-foundation';

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
  paddingTop: 20,
  paddingBottom: 20,
  backgroundColor: 'white',
  textAlign: 'center',
 
}

const inputStyles = {
  color: '#3F51B5',
  width: 350,
  shadowOpacity: 0
}

const buttonStyles = {
  
}

const RowStyle = {
  minWidth: '100%',

}

const initialState = {
  loggedIn: false,
  signUp: false,
  forgotPassword: false,
  email: '',
  password: '',
  updated: false,
  signUpSuccess: false,
  logInSuccess: false,
  uid: ''
}

export default class LoginContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = initialState

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.submitSignup = this.submitSignup.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
    this.handleAuth = this.handleAuth.bind(this)
  }

  componentWillReceiveProps(props){
    this.replaceState(props)
  }

  reset() {
    this.setState(initialState);
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

  handleAuth(result) {
    console.log(result)
    var that = this
    if (result) {
           // User is signed in.
           that.setState({
            logInSuccess: true,
            uid: result.uid
          })
        } else {
          // No user is signed in.
          console.log("Something went wrong. Try again later.")
        }
      
  }

  submitLogin() {
    var email = this.state.email
    var password = this.state.password
    var that = this

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(result){
      that.handleAuth(result)
    })
    .catch(function(error, authData) {
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
      <Row style={RowStyle} className="display">
        <Column style={containerStyles} small={12} medium={8} large={6} offsetOnMedium={2} offsetOnLarge={3}>
          <Row style={RowStyle}> 
            <Column small={12} large={12}> 
              <h2> Login </h2>
            </Column>
          </Row>

          <br />

          <Row style={RowStyle}>
            <Column small={12} large={12}>
              <TextField
                defaultValue={this.state.email}
                type="text"
                style={inputStyles}
                onChange={this.handleEmailChange}
                floatingLabelText="E-mail"
                />
             </Column>
          </Row>
          
          <Row style={RowStyle}>
            <Column small={12}>
              <TextField
                  defaultValue={this.state.password}
                  style={inputStyles}
                  onChange={this.handlePasswordChange}
                  type="password"
                  floatingLabelText="Password"
                />
            </Column>
          </Row>

          <br />
          <br />

          <Row style={RowStyle}>
          <Column small={12} large={12}>
          <LoginSuccess display={this.state.logInSuccess}/>
          </Column>
          </Row>

          <br />
          <br />

          <Row style={RowStyle}>
            <Column small={12} large={12}>
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
              
            </Column>
          </Row>
        
        </Column>
      </Row>
    )
  }

  renderSignup() {


    return (
      <Row style={RowStyle} className="display">
        <Column style={containerStyles} small={12} medium={8} large={4} offsetOnMedium={2} offsetOnLarge={4}>
            <Row style={RowStyle}> 
              <Column small={12} large={12}> 
                <h2> Sign up </h2>
              </Column>
            </Row>

            <br />

              <Row style={RowStyle}>
                <Column small={12} large={12} >
                  <TextField
                  defaultValue={this.state.email}
                  type="text"
                  style={inputStyles}
                  onChange={this.handleEmailChange}
                  ref="email"
                  floatingLabelText="E-mail"
                    />
                </Column>
              </Row>

              <Row style={RowStyle}> 
                <Column small={12} large={12}>
                    <TextField
                    defaultValue={this.state.password}
                    style={inputStyles}
                    onChange={this.handlePasswordChange}
                    type="password"
                    ref="password"
                    floatingLabelText="Password"
                      />
                </Column>
              </Row>

              <br />
              <br />
              
              <Row>
                <Column small={12} large={120}>
                    {this.signupSuccess}
                </Column>
              </Row>

              <br />
              <br />

              <Row>
                <Column small={12} large={12}>
                  <RaisedButton style={buttonStyles}
                          secondary={true}
                          onClick={() => this.changeSignUp(false)}
                          label="Go back"/>
                  <RaisedButton style={buttonStyles}
                          primary={true}
                          onClick={() => this.submitSignup()}
                          label="Sign up now" />

                </Column>
              </Row>
       </Column>
      </Row>
    )
  }

  renderForgotPassword() {
    return (
     <Row style={RowStyle} className="display" >
      <Column style={containerStyles} small={12} medium={8} large={4} offsetOnMedium={2} offsetOnLarge={4}>
       <Row style={RowStyle}> 
            <Column small={12} large={12}>
               <h2> Forgot your password? </h2>
            </Column>
       </Row>

       <br />

       <Row style={RowStyle}>
            <Column small={12}>
                <TextField
                defaultValue={this.state.email}
                type="text"
                style={inputStyles}
                onChange={this.handleEmailChange}
                ref="email"
                floatingLabelText="E-mail"
                  />
            </Column>
      </Row>

      <br />
      <br />

      <Row style={RowStyle}>
            <Column small={12}>
            
              <RaisedButton style={buttonStyles}
                            secondary={true}
                            onClick={() => this.changeForgotPassword(false)}
                            label="Go back"/>
              <RaisedButton style={buttonStyles}
                            primary={true}
                            onClick={() => this.submitPasswordForgotten()}
                            label="Send to E-mail" />
            </Column>
      </Row>

        </Column>
      </Row>
    )
  }

  renderNormal() {
    return (
      <Row style={containerStyles}>
        <Column>
        <p> Hi, it seems there was an error with the login service. Try again in a few minutes. </p>
        </Column>
      </Row>
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
