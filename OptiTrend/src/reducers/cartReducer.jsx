// cartReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
    updateCartItem(state, action) {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
