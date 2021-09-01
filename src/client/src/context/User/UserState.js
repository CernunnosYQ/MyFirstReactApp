import React, { useReducer } from "react";

import UserReducer from "./UserReducer";
import UserContext from "./UserContext";

const API = process.env.REACT_APP_API;

const UserState = (props) => {
  const initialState = {
    users: [],
    selected_user: {
      _id: null,
      username: "",
      password: "",
      email: "",
    },
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const res = await fetch(`${API}/users`);
    const data = await res.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  const getUser = async (id) => {
    const res = await fetch(`${API}/users/${id}`);
    const data = await res.json();

    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  const createUser = async (data) => {
    await fetch(`${API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    getUsers();
  };

  const updateUser = async (id, data) => {
    await fetch(`${API}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    getUsers();
  };

  const deleteUser = async (id) => {
    const user_res = window.confirm("¿Seguro de querer eliminar el usuario?");

    if (user_res) {
      await fetch(`${API}/users/${id}`, { method: "DELETE" });

      await getUsers();
    }
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selected_user: state.selected_user,
        getUsers,
        getUser,
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
