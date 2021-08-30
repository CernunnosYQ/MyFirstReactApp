import React from 'react'
import User from '../components/user'

const UserList = (props) => {
  return (
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th scope="col" className="col">Userame</th>
          <th scope="col" className="col">Password</th>
          <th scope="col" className="col-2">Options</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map(user => (
          <User user={user} edit={props.edit_user} delete={props.delete_user}></User>
        ))}
      </tbody>
    </table>
  );
}
    
export default UserList;