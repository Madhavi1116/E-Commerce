import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchByCategory } from "../Slices/ProductSlice";
import ProductList from "./ProductList";
import { addToCart } from "../Slices/CartSlice";
import { Box, CircularProgress, Typography } from "@mui/material";
import SearchBar from "./SearchBar";


const Category = () => {
    const {category} = useParams();
    const dispatch = useDispatch();
    const {product, loading, error, total} = useSelector((state)=>state.Products);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchByCategory(category));
    }, [dispatch, category]);

    useEffect(() => {
            setFilteredProducts(product);
        }, [product]);

        const handleSearch = (query) => {
            const lowerCaseQuery = query.toLowerCase();
            const filtered = product.filter(
                (item) =>
                    item.title.toLowerCase().includes(lowerCaseQuery) ||
                    item.category.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredProducts(filtered);
        };

        // const handleFilterChange = (filter) => {
        //     let sortedProducts = [...filteredProducts];
        //     if(filter === 'price'){
        //         sortedProducts.sort((a, b) => a.price - b.price);
        //     }else if(filter === 'rating'){
        //         sortedProducts.sort((a, b) => b.rating - a.rating);
        //     }
        //     setFilteredProducts(sortedProducts)
        // }
        const handleFilterChange = (filter) => {
            const sortedProducts = [...filteredProducts].sort((a, b) => {
                if (filter === "price") return a.price - b.price;
                if (filter === "rating") return b.rating - a.rating;
                return 0;
            });
            setFilteredProducts(sortedProducts);
        };

    const handleAddToCart = (product) => {
            dispatch(addToCart(product))
        }

    if(loading){
        return (
            <Box textAlign="center" mt={4}>
                <CircularProgress />
            </Box>
        )
    }
    if(error) return (
        <Typography color="error" align="center">
                Error: {error}
            </Typography>
    )

return (
    <Box>
        <Typography variant="h4" gutterBottom align="center">
            {category.charAt(0).toUpperCase() + category.slice(1)} Products
        </Typography>
        <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart}/>
    </Box>
)

}
export default Category