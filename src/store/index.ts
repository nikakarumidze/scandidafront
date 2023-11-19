import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
