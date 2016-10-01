import React from 'react';

const containerStyles = {
  margin: 'auto',
  width: '30%',
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
      <div style={containerStyles}>
        <h1> {this.state.title} </h1>
      </div>
    )
  }
}
