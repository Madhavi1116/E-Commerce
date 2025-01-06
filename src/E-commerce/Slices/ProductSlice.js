import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts=createAsyncThunk( 'products/fetchAll',async()=>{
    const response= await fetch('https://dummyjson.com/products?limit=200')
    if(!response.ok){
        throw new Error("Unable to Fetch Products")
    }
    const data = await response.json();
    return data.products;
});
 
export const fetchByCategory = createAsyncThunk('products/fetchByCategory',async(category)=>{
    const response= await fetch(`https://dummyjson.com/products/category/${category}`)
    if(!response.ok){
        throw new Error(`Unable to fetch ${category} products`)
    }
    const data = await response.json();
    return data.products;
});

const initialState = {
    product: [],
    loading: false,
    error: null,
}
const productSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(fetchByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default productSlice.reducer