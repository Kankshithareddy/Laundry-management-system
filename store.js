import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CardReducer";
import ProductReducer from "./ProductReducer";
export default configureStore({
    reducer:{
        cart:CardReducer,
        product:ProductReducer
    }
})