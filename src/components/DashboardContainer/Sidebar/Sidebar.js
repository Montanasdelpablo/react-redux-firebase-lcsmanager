import React from 'react';
import { Row, Column } from 'react-foundation';

const containerStyles = {
  minWidth: '100%',
  height: '100%',
  padding: 0,
  margin: 0,
  paddingTop: 0,
  marginTop: 0,
  
}

const sidebarStyles = {
  width: 350,
  margin: 0,
  padding: 0,
  minHeight: '100%',
  backgroundColor: '#EDE7F6'
}

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
      return (
        <Row style={containerStyles}>
          <Column small={12} large={4} style={sidebarStyles}>
            <div id="sidebar-wrapper">
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
           </Column>
       </Row>

      );
  }
}
