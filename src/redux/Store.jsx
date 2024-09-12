import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import Productslice from "./Productslice";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        product: Productslice,
    },
    devTools: true
})