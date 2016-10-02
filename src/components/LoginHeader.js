import React from 'react';
import Foundation from 'react-foundation';
import { Row, Column } from 'react-foundation';

const RowStyle = {
  minWidth: '100%',
  }

const containerStyles = {
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
      <Row className="display" style={RowStyle}>
       
        <Column style={containerStyles} small={12} medium={8} large={6} offsetOnMedium={2} offsetOnLarge={3} >
          <h1> {this.state.title} </h1>
        </Column>

        
      </Row>
    )
  }
}
