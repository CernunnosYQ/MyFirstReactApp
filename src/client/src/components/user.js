import React from 'react'

const User = (props) => {
  return (
    <tr key={props.user._id}>
      <td>{props.user.username}</td>
      <td>{props.user.email}</td>
      <td className="btn-group col">
        <button
          onClick={() => props.edit(props.user._id)}
          className="btn btn-outline-secondary btn-sm">
            Edit
        </button>
        <button
          onClick={() => props.delete(props.user._id)}
          className="btn btn-outline-danger btn-sm">
            Delete
        </button>
      </td>
    </tr>
  );
}

export default User;