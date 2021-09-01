import React, { useContext, useState } from "react";

import UserContext from "../context/User/UserContext";

const UserForm = () => {
  const { selected_user, createUser } = useContext(UserContext);

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({
        username: user,
        password: password,
        email: email,
      })

    setUser('')
    setPassword('')
    setEmail('')
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <div className="form-group mt-2 mb-2">
        <input
          type="text"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          placeholder="Username"
          className="form-control"
          autoFocus
        />
      </div>
      <div className="form-group mt-2 mb-2">
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="form-control"
        />
      </div>
      <div className="form-group pt-2">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary btn-block mt-4">Create</button>
    </form>
  );
};

export default UserForm;
