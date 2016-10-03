import React from 'react';
import { Menu, MenuItem, Row, Column } from 'react-foundation';

const containerStyles = {
  minWidth: '100%',
  height: 80,
  backgroundColor: '#212121',
  margin: 0,
  padding: 0,
  color: 'white',
  
}

const nestedStyles = {
  minWidth: '100%',
  height: 'auto',
  margin: 0,
  padding: 0,
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
          <Column id="mainNavigation" large={12} small={12}>
            <Row style={containerStyles}> 
              <Column small={12} medium={9} large={7}>
                <Row style={nestedStyles}>
                  <Column small={7} medium={8} large={7}>
                    <h2> LCS Manager </h2>
                  </Column>

                  <Column small={5} medium={4} large={4}>
                  <h3> Dashboard </h3>
                  </Column>
                </Row>
              </Column>
              
            
              <Column small={12} medium={6} large={6}>
                    <Row style={nestedStyles}> 
                      <Column small={6} large={6}>  
                          <Row style={nestedStyles}>
                            {/* Here comes trophy list */}
                              <Column small={12} medium={12} large={12}>
                                Trophy list
                              </Column>
                          </Row>
                          <Row style={nestedStyles}>
                            {/* Here comes profile details list */}
                              <Column small={12} large={12}>
                                <Menu>
                                  <MenuItem>
                                    <a href="#"> Score: </a>
                                  </MenuItem>
                                  <MenuItem>
                                    <a href="#"> Coins: </a>
                                  </MenuItem>
                                </Menu>
                              </Column >
                          </Row>
                      </Column>

                      <Column small={6} large={6}>
                        <Row style={nestedStyles}>
                          {/* Here comes profile pic */}
                          <Column className="profile-pic" small={4} large={2}>
                            <img src="../../../assets/images/dummyprofilepic.jpe" />
                          </Column>
                        </Row >
                      </Column>
                    </Row>
                </Column>
              </Row>
            </Column>
        </Row>
      );
  }
}
