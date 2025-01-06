import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Blog from './Blog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function Routing() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Blogs</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:blogName" element={<BlogDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default Routing;
