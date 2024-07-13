import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import customerReducer from './reducers/customerReducer'; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
    customer: customerReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };