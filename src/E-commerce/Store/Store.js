import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../Slices/ProductSlice';
import cartReducer from '../Slices/CartSlice';

const store = configureStore({
    reducer:{
        Products: ProductsReducer,
        cart : cartReducer,
    }
})
export default store