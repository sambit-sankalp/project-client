import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  games: [],
  error: '',
};

export const updateGame = createAsyncThunk('games/createGame', async (game) => {
  const {
    stepnumber,
    history,
    xIsNext,
    winner,
    isCompleted,
    player,
    createdBy,
  } = game;

  const { data } = await axios.post('http://localhost:5000/api/game/create', {
    stepnumber,
    history,
    xIsNext,
    winner,
    isCompleted,
    player,
    createdBy,
  });
  return data;
});

const updateGameSlice = createSlice({
    name: 'updateGame',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(updateGame.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateGame.fulfilled, (state, action) => {
                state.loading = false;
                state.games = action.payload;
                state.error = '';
            })
            .addCase(updateGame.rejected, (state, action) => {
                state.loading = false;
                state.games = [];
                state.error = action.error.message;
            });
    },
});

export default updateGameSlice.reducer;