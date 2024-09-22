import { createSlice } from "@reduxjs/toolkit";

const loadwishlistfromlocalstorage = () => {
    try {
        const savedwishlist = localStorage.getItem('wishlist');
        return savedwishlist ? JSON.parse(savedwishlist) : [];
    } catch (error) {
        console.log("Error in wishlist from local storage:", error);
        return [];
    }
}

const loadcartfromlocalstorage = () => {
    try {
        const saveditem = localStorage.getItem('cartitem');
        return saveditem ? JSON.parse(saveditem) : [];
    } catch (error) {
        console.log("Error in cart from local storage:", error);
        return [];
    }
}

const updatelocalstorage = (wishitems) => {
    localStorage.setItem('wishlist', JSON.stringify(wishitems));
    localStorage.setItem('wishcount', JSON.stringify(wishitems));
}

const updatecartstorage = (cartitem) => {
    localStorage.setItem('cartitem', JSON.stringify(cartitem));
    localStorage.setItem('cartcount', JSON.stringify(cartitem));
}

const initialState = {
    items: loadwishlistfromlocalstorage(),
    cart: loadcartfromlocalstorage(),
};

const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addtowishlist(state, action) {
            state.items.push(action.payload);
            localStorage.setItem('wishlist', JSON.stringify(state.items));
            state.wishcount = state.items.length;
            updatelocalstorage(state.items);
        },
        removefromwishlist(state, action) {
            const updatewishlist = state.items.filter(item => item.id !== action.payload.id);
            state.items = updatewishlist;
            localStorage.setItem('wishlist', JSON.stringify(state.items));
            state.wishcount = state.items.length;
            updatelocalstorage(state.items);
        },
        addtocart(state, action) {
            state.cart.push(action.payload);
            localStorage.setItem('cartitem', JSON.stringify(state.cart));
            state.cartcount = state.cart.length;
            updatecartstorage(state.cart);
        },
    }
});

export const { addtowishlist, removefromwishlist, addtocart } = WishlistSlice.actions;
export default WishlistSlice.reducer;