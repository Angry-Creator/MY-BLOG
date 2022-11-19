import { Link } from "react-router-dom";
import Posts from "../BlogPosts";
import Banner from "../components/Banner";
import BlogCard from "../components/BlogCard";
import Contact from "./Contact";


export default function Home() {
    return (
        <div className="container-fluid">
            {/* Banner */}
            <Banner />

            {/* Latest Blog */}
            <span className="d-block py-2 text-center fs-4 fw-bold border border-light bg-dark text-light rounded py-3">Latest Blog</span>

            {
                Posts.map((item, index) => {
                    return <BlogCard key={index} itemOne={item[0]} itemTwo={item[1]} itemThree={item[2]} />
                })
            }

            <div className="p-3 fs-6 text-center">
                <Link className="border px-4 py-2 text-decoration-none border-dark rounded fw-bold" to="/blogs"> See More Blogs &gt;&gt;&gt; </Link>
            </div>

            {/* Contact */}
            <Contact />
        </div>
    )
}