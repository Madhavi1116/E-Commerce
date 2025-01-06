import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Button, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2'
import { removeFromCart, incrementQuantity, decrementQuantity } from '../Slices/CartSlice';
import { Delete } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Your Cart
            </Typography>
            {cartItems.length === 0 ? (
                <Typography variant="h6" color="textSecondary">
                    Your cart is empty.
                </Typography>
            ) : (
                <Grid container spacing={10} marginLeft={20}>
                    {cartItems.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Box sx={{  alignItems: 'center', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                                <img src={item.image || item.thumbnail} alt={item.title} style={{ width: 160, height: 160, marginRight: '20px' }} />
                                <Box >
                                    <Typography variant="body1">{item.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        ${item.price} x {item.quantity}
                                    </Typography>
                                </Box>
                                <IconButton onClick={() => handleRemove(item.id)}>
                                    <Delete />
                                </IconButton>
                                <Box>
                                    <Button size="small" onClick={() => handleDecrement(item.id)}>-</Button>
                                    {item.quantity}
                                    <Button size="small" onClick={() => handleIncrement(item.id)}>+</Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
            <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '18px' }}>
                <Typography variant="h6">Total: ${calculateTotal()}</Typography>
                <Button variant="contained"  component = {NavLink} to='/'  color="primary" sx={{ alignSelf: 'center' }}>
                    Back
                </Button> 
                <Button variant="contained" color="primary" sx={{ alignSelf: 'center' }}>
                    Proceed to Checkout
                </Button>
            </Box>
        </Box>
    );
};

export default Cart;
