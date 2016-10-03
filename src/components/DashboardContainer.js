import React from 'react';
import NavBar from './DashboardContainer/Navbar/Navbar.js';
import Sidebar from './DashboardContainer/Sidebar/Sidebar.js'

import { Row, Column } from 'react-foundation';

import * as firebase from 'firebase';

const containerStyles = {
    minWidth: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
}





export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Dashboard'
    }
  }

  render() {
      return (
        <Row style={containerStyles}>
          <Column large={12} small={12} style={containerStyles}> 
          <NavBar> </NavBar>

          <Sidebar> </Sidebar>
          <Row style={containerStyles}>
            <Column small={12} large={9}> This is the {this.state.title} </Column>
          </Row>
          </Column>
        </Row>
      );
  }
}
