import { configureStore } from "@reduxjs/toolkit";
import  ShopSlice  from "./slices/ShopSlice";

export const store=configureStore({
    reducer:{
        shop: ShopSlice
    }
})