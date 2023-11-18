import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductI } from '../interfaces';

const initialState: ProductI[] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state: ProductI[], action: PayloadAction<ProductI[]>) => {
      state = [...state, ...action.payload];
    },
    removeProducts: (state: ProductI[], action: PayloadAction<string[]>) => {
        // state = state.filter(state.SKU )
      },
  },
});
