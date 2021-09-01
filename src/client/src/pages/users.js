import React from "react";

import Navbar from "../modules/Navbar";

import UserState from "../context/User/UserState";
import UserForm from "../modules/UserForm";
import UserList from "../modules/UserList";

const Users = () => {
  return (
    <>
      <Navbar />
      <UserState>
        <section className="container p-2">
          <h1>Users</h1>
          <div className="row">
            <div className="col-md-4">
              <UserForm />
            </div>
            <div className="col-md-8">
              <UserList />
            </div>
          </div>
        </section>
      </UserState>
    </>
  );
};

export default Users;
