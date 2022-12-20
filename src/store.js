import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './slices/auth/registerSlice';
import loginReducer from './slices/auth/loginSlice';

export default configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
});
