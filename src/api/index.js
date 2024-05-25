// src/api/index.js
import axios from 'axios';

export const fetchUsers = async (page = 1) => {
  const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
  return response.data;
};

export const fetchUser = async (id) => {
  const response = await axios.get(`https://reqres.in/api/users/${id}`);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await axios.patch(`https://reqres.in/api/users/${id}`, userData);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post('https://reqres.in/api/register', userData);
  return response.data;
};
