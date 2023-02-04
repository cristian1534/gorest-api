/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  isFetching: true,
  error: null,
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        error: null,
        isFetching: false,
      };
    case "GET_ONE_USER":
      return {
        ...state,
        users: action.payload,
        error: null,
        isFetching: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        error: null,
        isFetching: false,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
