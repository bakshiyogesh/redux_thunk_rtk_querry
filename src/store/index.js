import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import wishListReducer from './slices/wishList';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  // middleware: [logger, ],
})