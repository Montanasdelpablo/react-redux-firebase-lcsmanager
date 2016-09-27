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
    }
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
    console.log(boolean)
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

  renderLogin() {
    return (
      <div style={containerStyles}>
        <h3> Login </h3>

        <TextField
          style={inputStyles}
          hintText=""
          floatingLabelText="E-mail"
          />
        <br />
        <TextField
        style={inputStyles}
            hintText=""
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
                                    label="Log in" />

      </div>
    )
  }

  renderSignup() {
    return (
      <div style={containerStyles}>
        <h3> Sign up </h3>

        <TextField
        style={inputStyles}
          hintText=""
          floatingLabelText="E-mail"
          />
        <br />
        <TextField
        style={inputStyles}
            hintText=""
            floatingLabelText="Password"
          />
        <br />
        <br />
        <br />

        <RaisedButton style={buttonStyles}
                      onClick={() => this.changeSignUp(false)}
                      label="Go back"/>
        <RaisedButton style={buttonStyles}
                      label="Sign up now" />


      </div>
    )
  }

  renderForgotPassword() {
    return (
      <div style={containerStyles}>
        <h3> Forgot password? </h3>

        <TextField
        style={inputStyles}
          hintText=""
          floatingLabelText="E-mail"
          />
        <br />
        <br />
        <br />


        <RaisedButton style={buttonStyles}
                      onClick={() => this.changeForgotPassword(false)}
                      label="Go back"/>
        <RaisedButton style={buttonStyles}
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
