import { useEffect, useState } from "react";
import Posts from "../BlogPosts";
import BlogCard from "../components/BlogCard";


export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const GetBlogs = () => {
        let container = [];
        Posts.map((item) => {
            return container.push(item);
        });
        setBlogs(container);
    };

    useEffect(() => {
        GetBlogs()
    }, []);

    return (
        <div className="container-fluid">
            <div className="row overflow-hidden my-2 mx-md-2 gx-lg-2 gy-2 blog-row-card">
                {(blogs.length > 1) && blogs.map((item, index) => {
                    return <BlogCard item={item} />
                })
                }
            </div>
        </div>
    )
}