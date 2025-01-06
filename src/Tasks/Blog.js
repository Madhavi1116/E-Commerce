import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate();

    const handleBlogNavigation = (blogName) => {
        navigate(`/blog/${blogName}`);
    };

    return (
        <div>
            <h2>Blog</h2>
            <ul>
                <li>
                    <button onClick={() => handleBlogNavigation("Madhavi")}>Madhavi's Blog</button>
                </li>
                <li>
                    <button onClick={() => handleBlogNavigation("John")}>John's Blog</button>
                </li>
            </ul>
        </div>
    );
};

export default Blog;
