import axios from "axios";
import swal from "sweetalert";


const token = process.env.REACT_APP_TOKEN


const apiUrl = "https://gorest.co.in/public/v1/users?page="

export const fetchUsers = async (page) => {
  return await axios.get(`https://gorest.co.in/public/v1/users?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    
  });
};

export const fetchOneUser = async (id) => {
  return await axios.get(`${apiUrl}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export const updateUser = async (id, values) => {
  return await axios
    .put(`${apiUrl}/${id}`, values, {
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
