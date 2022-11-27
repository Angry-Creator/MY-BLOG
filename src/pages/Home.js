import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Posts from "../BlogPosts";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

export default function Home() {
    const [blogs, setBlogs] = useState([]);

    const GetBlogs = () => {
        let container = [];
        Posts.filter((item, index) => index < 3).map((item) => container.push(item));
        setBlogs(container);
    };

    useEffect(() => {
        GetBlogs()
    }, []);

    return (
        <div className="container-fluid">
            {/* Banner */}
            <Banner />

            {/* Latest Blog */}
            <span className="d-block py-2 text-center fs-4 fw-bold border border-light bg-dark text-light rounded py-3">Latest Blog</span>

            <div className="row overflow-hidden my-2 mx-md-2 gx-lg-2 gy-2 blog-row-card">
                {(blogs.length > 1) && blogs.map((item, index) => {
                    return <BlogCard key={index} item={item} />
                })
                }
            </div>

            <div className="p-3 fs-6 text-center">
                <Link className="border px-4 py-2 text-decoration-none border-dark rounded fw-bold" to="/blogs"> See More Blogs &gt;&gt;&gt; </Link>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}