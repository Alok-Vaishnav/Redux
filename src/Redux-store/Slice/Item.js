// src/Redux-store/Slice/CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    products: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addItem, setProducts } = CartSlice.actions;
export default CartSlice.reducer;

