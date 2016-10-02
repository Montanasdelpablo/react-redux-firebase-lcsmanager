import React from 'react';

import { Row, Column } from 'react-foundation';


const RowStyle = {
  minWidth: '100%',
  backgroundColor: '#212121',
  color: '#EDE7F6',
  fontFamily: 'Roboto',
  paddingTop: 50,
  paddingRight: 15,
  paddingLeft: 15,
  margin: 'auto',
  paddingBottom: 80,
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
      <Row style={RowStyle}>
        
        <Column small={12} large={6} offsetOnLarge={3}>
        
          <h2> {this.state.subheader} </h2>
          <p> {this.state.introduction} </p>
        
        </Column>
        
      </Row>
    )
  }
}
