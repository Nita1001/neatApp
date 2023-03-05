import axios from 'axios';
import { USERS_URL, API_ERROR_MESSAGE } from '../utils/constants'

export const updateUser = async (user) => {
  try {
    const response = await axios.put(`${USERS_URL}/${user.id}`, user);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(API_ERROR_MESSAGE);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${USERS_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(API_ERROR_MESSAGE);
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(`${USERS_URL}`, user);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(API_ERROR_MESSAGE);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(USERS_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(API_ERROR_MESSAGE);
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${USERS_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(API_ERROR_MESSAGE);
  }
};

export const logInUser = async (email, password) => {
  try {
    const response = await axios.get(USERS_URL);
    const user = response.data.find((user) => user.email === email && user.password === password);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error(API_ERROR_MESSAGE);
  }
};

