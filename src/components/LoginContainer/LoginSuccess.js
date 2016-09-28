import React from 'react';
import SkyLight from 'react-skylight';
import RaisedButton from 'material-ui/RaisedButton';

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
          <section>
              <RaisedButton primary={true}
              fullWidth={true} onClick={() => that.refs.simpleDialog.show()}
              label="Enter Dashboard"
              labelColor="white"
              >

              </RaisedButton>
          </section>

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
