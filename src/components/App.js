import React from 'react';

import Paper from 'material-ui/Paper';

import Foundation from 'react-foundation';
import { Row, Column } from 'react-foundation';

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
  fontFamily: 'Helvetica'
}

const wrapper = {
  width:'100%',
  height:'100%',
}

const RowStyle = {
  minWidth: '100%',
}


export default class App extends React.Component {


  render() {

    return (
      <div>
          <Row style={RowStyle} className="display">
            
              <Column style={containerStyles} small={12} large={12}>
                

                    <LoginHeader />
                    <LoginContainer />
                  
              </Column>
                 
        </Row>
        <Row style={RowStyle} className="display">

                <Column small={12} large={12}>

                  <Introduction />

                  <Footer />

                </Column>
        </Row>
      </div>
      

    );
  }
}
