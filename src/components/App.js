import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';

import Introduction from './Introduction.js';
import LoginHeader from './LoginHeader.js';
import LoginContainer from './LoginContainer.js';
import Footer from './Footer.js';

const images = {
  headerimg: "../assets/images/StarGuardianLux.jpg"
}

const containerStyles = {
  paddingTop: 175,
  backgroundImage: 'url(' + images.headerimg + ')',
  backgroundSize: 'cover',

}

@connect((store) => {
  return {
    users: store.users.users
  }
})

export default class App extends React.Component {


  render() {

    return (
      <div>
        <Paper
        zDepth={4}
        style={containerStyles}>

          <LoginHeader />
          <LoginContainer />
        </Paper>

        <Introduction />
        <Footer />
      </div>
    );
  }
}
