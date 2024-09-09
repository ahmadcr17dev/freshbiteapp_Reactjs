import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('cartitem')) || [],
    counter: 0,
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
        },
        increment(state, action) {
            const itemindex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemindex > 0) {
                state.items[itemindex].quantity += 1;
            }
        },
        decrement(state, action) {
            const itemindex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemindex >= 0 && state.items[itemindex].quantity > 1) {
                state.items[itemindex].quantity -= 1;
            }
        }
    }
});

export const { addtocart, deletefromcart, increment, decrement } = CartSlice.actions;
export default CartSlice.reducer;