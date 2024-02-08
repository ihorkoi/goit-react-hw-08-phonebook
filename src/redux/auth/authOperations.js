import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://phonebook-csua.onrender.com/api/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/auth/signup', user);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(persistedToken);
      const response = await axios.get('/auth/current');
      return response.data;
    } catch (error) {
      clearToken()
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk('auth/logIn', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/auth/login', user);
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
