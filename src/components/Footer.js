import React from 'react';
import { Row, Column } from 'react-foundation';


const RowStyle = {
  minWidth: '100%',
  color: 'black',
  backgroundColor: '#EDE7F6',
  fontFamily: 'Roboto',
  position: 'fixed',
  bottom: 0,
}

const smStyle = {
  listStyleType: 'none',
  textAlign: 'center',
}

const copyrightStyle = {
  width: 160,
  marginTop: 10,
  marginRight: 8,
  listStyleType: 'none',
  textAlign: 'right',
  color: '#212121E',
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
      <Row style={RowStyle}>
        <Column small={12} large={4} offsetOnLarge={5}>
          <Row>
            <Column small={2} large={4}>
              <li style={smStyle}> <img src="../assets/images/facebook.png" /> </li>
            </Column>
            <Column small={2} large={4}>
              <li style={smStyle}> <img src="../assets/images/twitter.png" /> </li>
            </Column>
            <Column small={2} large={4}>  
              <li style={smStyle}> <img src="../assets/images/github-sign.png" /> </li>
            </Column>
          </Row>
        </Column>

        <Column small={10} large={2}>
             <li style={copyrightStyle}> &copy; made by Montanas </li>
        </Column>
      </Row>
    )
  }
}
