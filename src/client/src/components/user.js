import React, { useContext } from "react";

import UserContext from "../context/User/UserContext";

const User = (props) => {
  const { getUser, deleteUser } = useContext(UserContext);

  return (
    <tr>
      <td>{props.user.username}</td>
      <td>{props.user.email}</td>
      <td className="btn-group col">
        <button
          onClick={() => getUser(props.user._id)}
          className="btn btn-outline-secondary btn-sm"
        >
          Edit
        </button>
        <button
          onClick={() => deleteUser(props.user._id)}
          className="btn btn-outline-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
