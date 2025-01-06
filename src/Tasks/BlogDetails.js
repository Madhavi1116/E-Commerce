import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { blogName } = useParams();
    return <h2>Welcome to {blogName}'s Blog</h2>;
};

export default BlogDetails;
