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

const updatelocalstorage = (wishitems) => {
    localStorage.setItem('wishlist', JSON.stringify(wishitems));
    localStorage.setItem('wishcount', JSON.stringify(wishitems));
}

const initialState = {
    items: loadwishlistfromlocalstorage(),
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
    }
});

export const { addtowishlist, removefromwishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;