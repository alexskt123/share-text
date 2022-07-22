import { configureStore } from '@reduxjs/toolkit';
import inputSlice from '../../store/inputSlice';

export default configureStore({
  reducer: {
    input: inputSlice
  },
});