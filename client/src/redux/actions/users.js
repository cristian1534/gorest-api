import * as api from "../api";
import { GET_USERS, GET_ONE_USER, UPDATE_USER } from "../constants/constants";

export const getUsers = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers(page);
    dispatch({ type: GET_USERS, payload: data });
  } catch (err) {
    console.err(err.message);
  }
};

export const getOneUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOneUser(id);
    dispatch({ type: GET_ONE_USER, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateOneUser = (id, values) => async (dispatch) => {
  try {
    const { data } = api.updateUser(id, values);
    dispatch({ type: UPDATE_USER, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
