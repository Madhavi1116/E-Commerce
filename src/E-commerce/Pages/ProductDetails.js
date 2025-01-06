import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography, CardContent, Card, CardMedia } from "@mui/material";
import { addToCart } from "../Slices/CartSlice";
import {  fetchProducts } from "../Slices/ProductSlice";


const ProductDetails = () => {
    const { id } = useParams();
    const { product } = useSelector((state) => state.Products);
    const dispatch = useDispatch();
    const products = product.find((item) => item.id === parseInt(id, 10));

    useEffect(() => {
        dispatch(fetchProducts(product))
    }, [dispatch])

    const handleAddToCart = () => {
        dispatch(addToCart(products));
    }
    if (!products) {
        return (
            <Typography variant="h6" color="error" align="center">
                Product Not Found
            </Typography>
        );
    }

    return (
        <Card sx={{ maxWidth: 600, margin: "auto", marginTop: 4 }}>
            <CardMedia
                component="img"
                height="500"
                image={products.image || products.thumbnail}
                alt={products.title} />

            <CardContent>
                <Typography variant="h4">{products.title}</Typography>
                <Typography variant="h6">${products.price}</Typography>
                <Typography variant="h6">Rating: {products.rating}</Typography>
                <Typography>{products.description}</Typography><br></br>
                <Button variant="contained" color="blue" onClick={handleAddToCart}>Add To Cart</Button>
            </CardContent>
        </Card>
    );
}

export default ProductDetails;
