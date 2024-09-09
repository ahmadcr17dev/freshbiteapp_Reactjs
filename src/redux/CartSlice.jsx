import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('cartitem')) || [],
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart(state, action) {
            state.items.push(action.payload);
            localStorage.setItem('cartitem', JSON.stringify(state.items));
            console.log("New Product: ", localStorage.getItem('cartitem'))
        },
        deletefromcart(state, action) {
            const updateitems = state.items.filter(item => item.id != action.payload.id);
            state.items = updateitems;
            localStorage.setItem('cartitem', JSON.stringify(state.items));
        }
    }
});

export const { addtocart, deletefromcart } = CartSlice.actions;
export default CartSlice.reducer;