import { GET_USERS, GET_USER } from "../types.js";

const UserReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };

    case GET_USER:
      return {
        ...state,
        selected_user: payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
