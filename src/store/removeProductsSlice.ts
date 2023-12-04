import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type removeProductType = Array<string>;

export const removeProductsSlice = createSlice({
  name: 'removeProducts',
  initialState: new Array<string>(),
  reducers: {
    removeProductsAdd: (
      state: removeProductType,
      action: PayloadAction<string>
    ) => {
      state.push(action.payload);
      return state;
    },
    removeProductsDelete: (
      state: removeProductType,
      action: PayloadAction<string>
    ) => state.filter((product) => product !== action.payload),
    removeProductsClear: (state: removeProductType) => (state = []),
  },
});

export const { removeProductsAdd, removeProductsDelete, removeProductsClear } =
  removeProductsSlice.actions;
