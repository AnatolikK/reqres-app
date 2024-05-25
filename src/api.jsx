import axios from 'axios';

const API_URL = 'https://reqres.in/api';

// Получение списка пользователей
export const fetchUsers = async (page) => {
  try {
    const response = await axios.get(`${API_URL}/users?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Получение информации о конкретном пользователе
export const fetchUser = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  };

// Получение списка ресурсов
export const fetchResources = async () => {
  try {
    const response = await axios.get(`${API_URL}/unknown`);
    return response.data;
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
};

// Получение информации о конкретном ресурсе
export const fetchResource = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/unknown/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching resource:', error);
    throw error;
  }
};

// Создание нового пользователя
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Обновление пользователя (PUT)
export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// Частичное обновление пользователя (PATCH)
export const patchUser = async (id, userData) => {
  try {
    const response = await axios.patch(`${API_URL}/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error patching user:', error);
    throw error;
  }
};

// Удаление пользователя
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// Регистрация пользователя
export const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };

// Логин пользователя
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Запрос с задержкой
export const fetchDelayedResponse = async (delay) => {
  try {
    const response = await axios.get(`${API_URL}/users?delay=${delay}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching delayed response:', error);
    throw error;
  }
};
