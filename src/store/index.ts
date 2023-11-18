import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productSlice';

export const store = configureStore({
  reducer: {
    auth: productsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
