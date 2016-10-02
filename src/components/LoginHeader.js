import React from 'react';
import Foundation from 'react-foundation';
import { Row, Column } from 'react-foundation';

const containerStyles = {
  margin: 'auto',
  width: 500,
  textAlign: 'center',
  backgroundColor: '#3F51B5',
  color: 'white',
  position: 'relative',
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
      <Row style={containerStyles}>
        <Column small={12} large={4}>
          <h1> {this.state.title} </h1>
        </Column>
      </Row>
    )
  }
}
