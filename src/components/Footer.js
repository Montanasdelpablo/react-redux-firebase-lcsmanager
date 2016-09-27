import React from 'react';

const containerStyles = {
  color: 'white',
  width: '100%',
  height: 35,
  backgroundColor: '#263238',
  fontFamily: 'Roboto',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
}

const smStyle = {
  width: 80,
  listStyleType: 'none',
  display: 'inline-block',
  marginRight: 5,
  marginLeft: 5,
  marginTop: 5,
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
        <li style={smStyle}> SM icon 1</li>
        <li style={smStyle}> SM icon 2</li>

        <li style={copyrightStyle}> &copy; made by Montanas </li>
      </div>
    )
  }
}
