import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  user: [],
  success: undefined,
  error: '',
};

export const login = createAsyncThunk('user/login', async (user) => {
  const { username, password } = user;
  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };

  const { data } = await axios.post(
    'http://localhost:5000/api/user/signin',
    { username, password },
    config
  );
  localStorage.setItem("userInfo", JSON.stringify(data));
  return data;
});

const loginSlice = createSlice({
  name: 'userLogin',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
        state.error = '';
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.user = [];
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
