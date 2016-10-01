import React from 'react';
import { Grid, Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const containerStyles = {
  width: 380,
  height: '100%',
  paddingTop: 0,
  marginTop: 0,
}

const sidebarStyles = {
  width: 380,
}

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
      return (
        <Row style={containerStyles}>
          <Col xs={12} md={4} style={containerStyles}>
            <div id="sidebar-wrapper" style={sidebarStyles}>
               <ul className="sidebar-nav">
                   <li className="sidebar-brand">
                       <a href="#">
                           Start game
                       </a>
                   </li>
                   <li>
                       <a href="#">Home</a>
                   </li>
                   <li>
                       <a href="#">Explore the league</a>
                   </li>
                   <li>
                       <a href="#">Highscores</a>
                   </li>
                   <li>
                       <a href="#">Friends</a>
                   </li>
                   <li>
                       <a href="#">Messages</a>
                   </li>
                   <li>
                       <a href="#">Earn coins</a>
                   </li>
                   <li>
                       <a href="#">Contact</a>
                   </li>
               </ul>
           </div>
           </Col>
       </Row>

      );
  }
}
