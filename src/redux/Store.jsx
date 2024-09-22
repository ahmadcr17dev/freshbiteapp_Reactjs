import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import wishlistslice from "./wishlistslice";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        wishlist: wishlistslice,
    },
    devTools: true
})