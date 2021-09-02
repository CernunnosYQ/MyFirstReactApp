import {
  GET_USERS,
  SET_USER,
  SET_USERNAME,
  SET_PASSWORD,
  SET_EMAIL,
} from "../types.js";

const UserReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };

    case SET_USER:
      return {
        ...state,
        selected_user: payload,
      };

    case SET_USERNAME:
      return {
        ...state,
        selected_user: {
          ...state.selected_user,
          username: payload,
        },
      };

    case SET_PASSWORD:
      return {
        ...state,
        selected_user: {
          ...state.selected_user,
          password: payload,
        },
      };

    case SET_EMAIL:
      return {
        ...state,
        selected_user: {
          ...state.selected_user,
          email: payload,
        },
      };

    default:
      return state;
  }
};

export default UserReducer;
