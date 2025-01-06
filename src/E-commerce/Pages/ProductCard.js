import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ product, onAddToCart }) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/product/${product.id}`)
    }

    return (
        <Card
            sx={{
                maxWidth: 250,
                height: 330,
                margin: "20px",
                cursor: "pointer",
                overflow:"auto"
            }}
        >
            <CardMedia component="img" height="280" image={product.image || product.thumbnail} alt={product.title} onClick={handleCardClick} sx={{ cursor: "pointer" }} />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <b>Rating : {product.rating}</b>
                </Typography>
                <Button variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }} onClick={() => onAddToCart(product)}>Add to Cart </Button>
            </CardContent>
        </Card>
    )
}
export default ProductCard