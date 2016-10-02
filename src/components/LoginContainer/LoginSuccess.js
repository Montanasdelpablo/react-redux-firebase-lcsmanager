import React from 'react';
import SkyLight from 'react-skylight';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import Foundation from 'react-foundation';

const containerStyles = {

}


export default class LoginSuccess extends React.Component {
  constructor(props) {
    super(props)

  }
  

  renderLoginSuccess(){
    var that = this
    return (
        <div>

          <Link to="/dashboard" isExpanded>
              <RaisedButton primary={true}
              fullWidth={true}
              label="Enter Dashboard"
              labelColor="white"
              >

              </RaisedButton>
          </Link>



          <SkyLight ref="loginSuccess"
                    title="Hi, this is a modal.">
            <p> Succesfully logged in! </p>
            <p> Click here to continue to the dashboard.. </p>
          </SkyLight>
        </div>
    )
  }
  renderNormal(){
    return (
        <div>

        </div>
    )
  }

  render() {
    var render
    if (this.props.display == true) {
      render = this.renderLoginSuccess()
    }
    else {
      render = this.renderNormal()
    }
    return render
  }
}
