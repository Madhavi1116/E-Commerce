import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Switch, Select, MenuItem, FormControl } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggleTheme, currentTheme }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = [
        "beauty",
        "fragrances",
        "furniture",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "womens-watches",
    ];

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    E-Commerce
                </Typography>

                <Button color="inherit" component={NavLink} to="/" exact sx={{marginRight:5}}>
                    Home
                </Button>

                <FormControl color="inherit">
                    <Select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        displayEmpty
                        inputProps={{
                            "aria-label": "Category"
                        }}
                        sx={{
                            minWidth: 150, color: "inherit", borderRadius: "20px", border: "solid"
                        }}
                    >
                        <MenuItem value="" disabled>
                            Select Category
                        </MenuItem>
                        {categories.map((category) => (
                            <MenuItem
                                key={category}
                                value={category}
                                component={NavLink}
                                to={`/category/${category}`}
                            >
                                {category.replace("-", " ").toUpperCase()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Switch checked={currentTheme === "dark"} onChange={toggleTheme} />

                <Button color="inherit" component={NavLink} to="/Cart" >
                    Cart
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;