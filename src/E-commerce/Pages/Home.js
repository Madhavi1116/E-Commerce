import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Slices/ProductSlice';
import ProductList from '../Pages/ProductList';
import { Typography, CircularProgress, Box, Pagination } from '@mui/material';
import SearchBar from './SearchBar';
import { addToCart } from '../Slices/CartSlice';



const Home = () => {
    const dispatch = useDispatch();
    const { product, loading, error, total } = useSelector((state) => state.Products);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;
    const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

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
        setCurrentPage(1);
    };
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    const totalPages = Math.ceil(filteredProducts.length/productsPerPage);
    const startIndex = (currentPage-1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }

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
            if (filter === 'price') return a.price - b.price;
            if (filter === 'rating') return b.rating - a.rating;
            return 0;
        });
        setFilteredProducts(sortedProducts);
    };

    if (loading) {
        return (
            <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography variant="h6" color="error" align="center">
                {error}
            </Typography>
        );
    }

    return (
      
        <Box sx={{ padding: 2 }}>
            <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
            {filteredProducts.length > 0 ? (
                <ProductList products={currentProducts} onAddToCart = {handleAddToCart} />
                
            ) : (
                <Typography variant="h6" color="text.secondary" align="center">
                    No products found.
                </Typography>

            )}
            {totalPages >1 && (
                <Box sx={{display:'flex', justifyContent:'center', marginTop:4}}>
                    <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    />
                </Box>
            )}
        </Box>
    
    );
};

export default Home;
