import React from 'react';
import { Grid, Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const containerStyles = {
  width: '100%',
  height: 80
}

const profilepic = {
  width: 105,
  height: 75,
}


export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Dashboard'
    }
  }

  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }

  render() {
      return (
        <Row style={containerStyles}>
          <Col xs={12} md={12}>
          <Navbar default>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">LCS Manager</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>

                </Nav>
                <Nav pullRight>

                  <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>My profile</MenuItem>
                    <MenuItem eventKey={3.2}>Edit profile</MenuItem>
                    <MenuItem eventKey={3.3}>Messages</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Continue game</MenuItem>
                    <MenuItem eventKey={3.4}>Log out</MenuItem>
                  </NavDropdown>
                  <Col xs={12} md={3}>
                  <NavItem eventKey={1} href="#"><img style={profilepic} src="../../../assets/images/StarGuardianLux.jpg" /> </NavItem>
                  </Col>

                  <br />
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      );
  }
}
