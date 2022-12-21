import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  user: [],
  error: '',
};

export const getUser = createAsyncThunk('user/getUser', async (email) => {
  const { data } = await axios.post('http://localhost:5000/api/user/getUser', {
    email,
  });

  return data;
});

const getUserSlice = createSlice({
  name: 'getUser',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = '';
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.user = [];
        state.error = action.error.message;
      });
  },
});

export default getUserSlice.reducer;
