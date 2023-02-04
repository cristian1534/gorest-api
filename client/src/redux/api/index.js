import axios from "axios";
import swal from "sweetalert";

const token =
  "22ceaf0bb716ffa49dbcd56cca436f764f241804f3258c384ab12bc30694868e";

const getUsersUrl = "https://gorest.co.in/public/v1/users";
const getOneUserUrl = "https://gorest.co.in/public/v1/users";
const updateUserUrl = "https://gorest.co.in/public/v1/users";

export const fetchUsers = () => {
  return axios.get(getUsersUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export const fetchOneUser = (id) => {
  return axios.get(`${getOneUserUrl}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export const updateUser = (id, values) => {
  return axios
    .put(`${updateUserUrl}/${id}`, values, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    .then((res) => res.message)
    .catch((err) => {
      swal({
        title: "NOT AUTHORIZED",
        text: err.message,
        icon: "error",
      });
    });
};
