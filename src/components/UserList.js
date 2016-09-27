import React from 'react';



export default class UserList extends React.Component {
  render() {
    return (
      <div>
          <p> This is the userlist component </p>
          <ul>
          {this.props.users.map((user, i) => {
            return <li key={i}><strong> Name: </strong> {user.name}, <strong> Username: </strong> {user.username} </li>
          })}
          </ul>
      </div>
    );
  }
}
