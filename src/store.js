import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/auth/registerSlice';

export default configureStore({
    reducer: {
        user: userReducer,
    },
});

