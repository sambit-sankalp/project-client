import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  user: [],
  error: '',
};

export const login = createAsyncThunk(
  'user/login',
  async (username, password) => {
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
    return data;
  }
);

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
        state.user = action.payload;
        state.error = '';
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.user = [];
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
