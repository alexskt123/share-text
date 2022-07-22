import { configureStore } from '@reduxjs/toolkit';
import inputSlice from './feature/inputSlice';

export default configureStore({
  reducer: {
    input: inputSlice
  },
});