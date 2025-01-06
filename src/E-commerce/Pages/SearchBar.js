import React, { useState } from 'react';
import { TextField, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
 
const SearchBar = ({ onSearch, onFilterChange }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filter, setFilter] = useState('');
 
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        onSearch(value);
    };
    
    const handleFilterChange = (event) => {
        const value = event.target.value;
        setFilter(value);
        onFilterChange(value);
    }
 
    return (
        <Box sx={{ marginBottom: 2, textAlign: 'center', display:'flex', flexWrap: "wrap", gap: "20px", justifyContent: "center", }}>
            <TextField
                label="Search by Product or Category"
                variant="outlined"
                fullWidth
                value={searchValue}
                onChange={handleSearch}
                sx={{ width: { xs: "100%", md: "70%" } }}
            />
            <FormControl variant='outlined' sx={{minWidth:120}}>
                <InputLabel>Sort By</InputLabel>
                <Select value={filter} onChange={handleFilterChange} label="Sort By">
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="price">Price (Low to High)</MenuItem>
                    <MenuItem value="rating">Rating (High to Low)</MenuItem>
                </Select>
            </FormControl>
            
        </Box>
    );
};
 
export default SearchBar;