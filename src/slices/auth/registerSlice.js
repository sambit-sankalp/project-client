import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  user: [],
  error: '',
};

export const register = createAsyncThunk(
  'user/register',
  async (name, username, email, password) => {
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
    return data;
  }
);


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
        state.error = '';
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.user = [];
        state.error = action.error.message;
      });
  },
});


export default registerSlice.reducer;
