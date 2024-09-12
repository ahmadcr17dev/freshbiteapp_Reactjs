import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase/firebase";

// Async thunk to fetch products from Firestore
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const querySnapshot = await getDocs(collection(database, "shop"));
    const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return products;
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        filteredProducts: [],
        load: false,
        error: null,
    },
    reducers: {
        searchProduct: (state, action) => {
            const query = action.payload.toLowerCase();
            state.filteredProducts = state.products.filter((product) =>
                product.name.toLowerCase().includes(query)
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.load = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.load = false;
                state.products = action.payload;
                state.filteredProducts = action.payload; // Initially display all products
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.load = false;
                state.error = action.error.message;
            });
    },
});

export const { searchProduct } = productSlice.actions;

export default productSlice.reducer;