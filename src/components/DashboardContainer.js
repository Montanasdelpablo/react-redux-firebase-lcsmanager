import React from 'react';
import NavBar from './DashboardContainer/Navbar/Navbar.js';
import Sidebar from './DashboardContainer/Sidebar/Sidebar.js'

import { Grid, Row, Col } from 'react-bootstrap';

import * as firebase from 'firebase';

const containerStyles = {
    width: '100%',
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
        <Grid style={containerStyles}>

        <NavBar> </NavBar>
        <Sidebar> </Sidebar>
        <Row>
          <Col xs={12} md={8}> This is the {this.state.title} </Col>
        </Row>
        </Grid>
      );
  }
}
