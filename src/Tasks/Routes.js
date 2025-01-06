import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    useParams,
} from "react-router-dom";

const Home = () => <h2>Welcome to Home Page</h2>
const Contacts = () => <h2>Contact us at : contact@example.com</h2>
const Blogs = () => {
    const navigate = useNavigate();
    const handleBlogNavigation = (blogName) => {
        navigate(`/blogs/${blogName}`);
    };
    return (
        <div>
            <h2>Blogs</h2>
            <ul>
                <li>
                    <button onClick={() => handleBlogNavigation("Madhavi")}>Madhavi's Blog</button>
                </li>
                <li>
                    <button onClick={() => handleBlogNavigation("john")}>John's Blog</button>
                </li>
            </ul>
        </div>
    );
};
const BlogDetails = () => {
    const { blogName } = useParams();
    return <h2>Welcome to {blogName}'s Blog</h2>
};

const NoPageFound = () => <h2>404 - Page Not Found</h2>

function RoutesTask(){
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to = "/blogs">Blogs</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:blogName" element={<BlogDetails />} />
                <Route path="*" element={<NoPageFound />} />
            </Routes>
        </Router>
    );
};
export default RoutesTask