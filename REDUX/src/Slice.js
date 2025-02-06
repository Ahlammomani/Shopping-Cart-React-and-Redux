import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(cart => cart.id === action.payload.id); 
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload); 
      }
      localStorage.setItem("cart", JSON.stringify(state.cart)); 
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(cart => cart.id !== action.payload); 
      localStorage.setItem("cart", JSON.stringify(state.cart)); 
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cart.find(cart => cart.id === id); 
      if (product) {
        product.quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart)); 
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
