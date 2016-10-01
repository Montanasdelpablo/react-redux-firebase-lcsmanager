import React from 'react';

import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Introduction from './Introduction.js';
import LoginHeader from './LoginHeader.js';
import LoginContainer from './LoginContainer.js';
import Footer from './Footer.js';
import Dashboard from './DashboardContainer.js';

const images = {
  headerimg: "../assets/images/StarGuardianLux.jpg"
}

const containerStyles = {
  paddingTop: 175,
  backgroundImage: 'url(' + images.headerimg + ')',
  backgroundSize: 'cover',

}



export default class App extends React.Component {


  render() {

    return (
        <div>
        <MuiThemeProvider>
            <Paper
            zDepth={4}
            style={containerStyles}>

              <LoginHeader />
              <LoginContainer />

            </Paper>
        </MuiThemeProvider>
            <Introduction />
            <Footer />

       </div>

    );
  }
}
