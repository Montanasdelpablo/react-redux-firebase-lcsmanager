import React from 'react';

const containerStyles = {
  color: 'white',
  fontFamily: 'Roboto',
  textAlign: 'center',
  paddingTop: 50,
}


export default class Introduction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: "LCS Manager",
      subheader: "Welcome to your favorite simulation game!",
      introduction: "A customised dashboard to fit your needs. Start earning some coins and see how high you can rank up between friends?",
    }
  }



  render() {
    return (
      <div style={containerStyles}>
        <h1> {this.state.header} </h1>
        <h3> {this.state.subheader} </h3>
        <p> {this.state.introduction} </p>
      </div>
    )
  }
}
