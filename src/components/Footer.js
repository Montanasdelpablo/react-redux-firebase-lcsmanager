import React from 'react';

const containerStyles = {
  color: 'black',
  width: '100%',
  height: 40,
  backgroundColor: 'white',
  fontFamily: 'Roboto',
  position: 'fixed',
  bottom: 0,
}

const smStyle = {
  width: 30,
  listStyleType: 'none',
  display: 'inline-block',
  marginRight: 5,
  marginLeft: 5,
  marginTop: 5,
  textAlign: 'center',
}

const copyrightStyle = {
  width: 160,
  marginTop: 10,
  marginRight: 8,
  listStyleType: 'none',
  textAlign: 'right',
  color: '#90A4AE',
  float: 'right',
}

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {
    return (
      <div style={containerStyles}>
        <li style={smStyle}> <img src="../assets/images/facebook.png" /> </li>
        <li style={smStyle}> <img src="../assets/images/twitter.png" /> </li>
        <li style={smStyle}> <img src="../assets/images/github-sign.png" /> </li>

        <li style={copyrightStyle}> &copy; made by Montanas </li>
      </div>
    )
  }
}
