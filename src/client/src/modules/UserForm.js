import React, { useContext } from "react";

import UserContext from "../context/User/UserContext";

const UserForm = () => {
  const {
    selected_user,
    createUser,
    updateUser,
    setUsername,
    setPassword,
    setEmail,
    setFirst,
    setLast,
    setBio,
    resetSelectedUser,
  } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selected_user._id) {
      updateUser();
    } else {
      createUser();
    }

    resetSelectedUser();
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body d-flex">
      <div className="form-group">
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={selected_user.username}
          placeholder="Username"
          className="form-control"
          autoFocus
        />
      </div>
      {selected_user.hasOwnProperty("password") && (
        <div className="form-group">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={selected_user.password}
            placeholder="Password"
            className="form-control"
          />
        </div>
      )}
      <div className="form-group">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={selected_user.email}
          placeholder="Email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          onChange={(e) => setFirst(e.target.value)}
          value={selected_user.first || ""}
          placeholder="First name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          onChange={(e) => setLast(e.target.value)}
          value={selected_user.last || ""}
          placeholder="Last name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={(e) => setBio(e.target.value)}
          value={selected_user.biography || ""}
          placeholder="Biography"
          rows="4"
          className="form-control"
        ></textarea>
      </div>
      <div className="d-flex">
        <button
          className="flex-fill btn btn-outline-danger"
          onClick={(e) => {
            e.preventDefault();
            resetSelectedUser();
          }}
        >
          Cancel
        </button>
        <button className="flex-fill btn btn-primary">Create</button>
      </div>
    </form>
  );
};

export default UserForm;
