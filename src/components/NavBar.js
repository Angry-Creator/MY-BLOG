import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


export default function NavBar() {
    const location = useLocation();
    const [home, setHome] = useState("nav-link");
    const [blogs, setBlogs] = useState("nav-link");
    const [contact, setContact] = useState("nav-link");

    const changeActive = () => {
        if(location.pathname === "/"){
            setHome("nav-link active");
            setBlogs("nav-link");
            setContact("nav-link");
        } else if (location.pathname === "/blogs"){
            setHome("nav-link");
            setBlogs("nav-link active");
            setContact("nav-link");
        } else if(location.pathname === "/contact"){
            setHome("nav-link");
            setBlogs("nav-link");
            setContact("nav-link active");
        }
    }

    useEffect(()=>{
        changeActive();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return (
        <nav className="navbar navbar-expand-lg bg-light py-2 sticky-top">
            <div className="container">
                <Link className="navbar-brand fs-4 fw-bold">Chidera Nwankwo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBox" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarBox">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <Link className={home} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-lg-2">
                            <Link className={blogs} to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://chidera-nwankwo-portfolio.netlify.app/" >Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <Link className={contact} to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item">
                            <Link className="social-icon"><i className="bi-facebook"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="social-icon"><i className="bi-twitter"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="social-icon"><i className="bi-linkedin"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="social-icon"><i className="bi-github"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}