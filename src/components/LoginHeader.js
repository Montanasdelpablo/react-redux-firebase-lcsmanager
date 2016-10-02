import React from 'react';
import Foundation from 'react-foundation';
import { Row, Column } from 'react-foundation';

const rowStyles = {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 'initial'
}

const containerStyles = {
  width: 500,
  margin: 'auto',
  textAlign: 'center',
  backgroundColor: '#3F51B5',
  color: 'white',
  paddingTop: 20,
  paddingBottom: 15,
}


export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "LCS Manager",

    }
  }



  render() {
    return (
      <Row className="display" style={rowStyles}>
       
        <Column style={containerStyles} small={12} large={4}>
          <h1> {this.state.title} </h1>
        </Column>

        
      </Row>
    )
  }
}
