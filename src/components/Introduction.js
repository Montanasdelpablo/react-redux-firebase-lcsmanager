import React from 'react';

const containerStyles = {
  backgroundColor: '#212121',
  minHeight: 600,
  color: '#EDE7F6',
  fontFamily: 'Roboto',
  paddingTop: 50,
  width:'100%',
  margin: 'auto',
}

const rowStyle = {
  width:600,
  margin: 'auto',
  textAlign: 'center',
}


export default class Introduction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: "LCS Manager",
      subheader: "Welcome to your favorite simulation game!",
      introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet eu leo eu convallis. Nam et metus ut massa dignissim gravida. Morbi rutrum facilisis quam lobortis ultricies. Integer sagittis quam eget ultricies efficitur. Pellentesque in ex gravida, vehicula orci in, ornare magna.  ",
    }
  }



  render() {
    return (
      <div style={containerStyles}>
        <div style={rowStyle}>
        <h1> {this.state.header} </h1>
        <h3> {this.state.subheader} </h3>
        <p> {this.state.introduction} </p>
        </div>
      </div>
    )
  }
}
