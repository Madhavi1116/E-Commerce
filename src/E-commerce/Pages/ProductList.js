import React from "react";
import Grid from "@mui/material/Grid2";
import ProductCard from "../Pages/ProductCard";

const ProductList = ({products, onAddToCart}) => (
    <Grid container spacing={2}>
        {products.map((product) => (
            <Grid item xs = {12} sm = {6} md = {4} key = {product.id}>
                <ProductCard product={product} onAddToCart={onAddToCart} />
            </Grid>
        ))}
    </Grid>
)
export default ProductList