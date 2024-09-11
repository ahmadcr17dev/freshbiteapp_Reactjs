import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    try {
        const savedCart = localStorage.getItem('cartitem');
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        return [];
    }
};

const loadselectedproduct = () => {
    try {
        const selectedproduct = localStorage.getItem('selectedproduct');
        return selectedproduct ? JSON.parse(selectedproduct) : null;
    } catch (error) {
        console.error('Error loading in products from local storage');
        return null;
    }
};

const initialState = {
    items: loadCartFromLocalStorage(),
    counter: 0,
    selectedproduct: loadselectedproduct(),
};

const updateLocalStorage = (cartitem) => {
    localStorage.setItem('cartitem', JSON.stringify(cartitem));
    localStorage.setItem('cartcount', cartitem.length);
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart(state, action) {
            state.items.push(action.payload);
            localStorage.setItem('cartitem', JSON.stringify(state.items));
            console.log("New Product: ", localStorage.getItem('cartitem'));
            state.cartcount = state.items.length;
            updateLocalStorage(state.items);
        },
        deletefromcart(state, action) {
            const updateitems = state.items.filter(item => item.id != action.payload.id);
            state.items = updateitems;
            localStorage.setItem('cartitem', JSON.stringify(state.items));
            state.cartcount = state.items.length;
        },
        increment(state, action) {
            const itemindex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemindex >= 0) {
                state.items[itemindex].quantity += 1;
            }
        },
        decrement(state, action) {
            const itemindex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemindex >= 0 && state.items[itemindex].quantity > 1) {
                state.items[itemindex].quantity -= 1;
            }
            else {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            }
        },
        clearcart: (state) => {
            state.items = [];
            localStorage.setItem('cartitem', JSON.stringify(state.items));
            state.cartcount = state.items.length;
        },
        initializeCart: (state) => {
            const savedCartCount = localStorage.getItem('cartcount');
            state.cartcount = savedCartCount ? parseInt(savedCartCount, 10) : 0;
        },
        productdetail: (state, action) => {
            state.selectedproduct = action.payload;
            localStorage.setItem('selectedproduct', JSON.stringify(action.payload));
        },
    }
});

export const selectCartSubtotal = (state) => {
    return state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
};
export const totalquantity = (state) => {
    return state.cart.items.reduce((total, item) => total + ((item.quantity + 1) - 1), 0);
};
export const { addtocart, deletefromcart, increment, decrement, clearcart, initializeCart, productdetail } = CartSlice.actions;
export default CartSlice.reducer;