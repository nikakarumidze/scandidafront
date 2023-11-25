import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productSlice';
import { removeProductsSlice } from './removeProductsSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    removeProducts: removeProductsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
