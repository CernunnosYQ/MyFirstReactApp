import React, { useContext, useEffect } from 'react';

import UserContext from '../context/User/UserContext';
import User from '../components/User';

const UserList = () => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th scope="col" className="col">Userame</th>
          <th scope="col" className="col">Email</th>
          <th scope="col" className="col-2">Options</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <User user={user} key={user._id}></User>
        ))}
      </tbody>
    </table>
  );
}
    
export default UserList;