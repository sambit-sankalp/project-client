import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  user: [],
  success: false,
  error: '',
};

export const register = createAsyncThunk('user/register', async (user) => {
  const { name, username, email, password } = user;
  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };

  const { data } = await axios.post(
    'http://localhost:5000/api/user/signup',
    { name, username, email, password },
    config
  );
  localStorage.setItem('userInfo', JSON.stringify(data));
  return data;
});

const registerSlice = createSlice({
  name: 'userRegister',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
        state.error = '';
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.user = [];
        state.error = action.error.message;
      });
  },
});

export default registerSlice.reducer;
