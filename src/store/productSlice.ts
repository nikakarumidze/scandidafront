import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductI } from '../interfaces';

const initialState: ProductI[] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state: ProductI[], action: PayloadAction<ProductI[]>) => {
      state = state.concat(action.payload);
      console.log(state);
    },
    removeProducts: (state: ProductI[], action: PayloadAction<Set<string>>) => {
      state = state.filter((item) => item.sku )
    },
  },
});

export const { addProducts, removeProducts } = productsSlice.actions;
