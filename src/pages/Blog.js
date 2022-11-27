import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Blog() {
    const location = useLocation();
    const [data, setData] = useState("");
    const [isAvailable, setIsAvailable] = useState(false);
    const navigate = useNavigate();
    const setAvailability = () => {
        if (location.state == null) {
            navigate("/");
        } else {
            setIsAvailable(true);
            setData(location.state.data);
        }
    }
    useEffect(() => {
        setAvailability();
    }, []);//eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {(isAvailable) && <div className="container-fluid">
                <span className="d-block text-center my-2 fs-5 fw-bold text-light bg-dark">{(data.title).toUpperCase()}</span>
                <Link className="d-block blog-image-container" to="/image" state={{ imagePath: data.image }}>
                    <img src={data.image} className="blog-image" alt="Incorrect file path" />
                </Link>
                <div className="row py-2 overflow-hidden">
                    <div className="col-12 col-md-6 d-flex flex-lg-column justify-content-between align-items-md-center justify-content-md-center px-3">
                        <span>{data.time}</span>
                        <span>{data.date}</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <ul className="navbar-nav flex-row align-items-center justify-content-md-center">
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
                    <div>
                        <span className="d-block text-center my-2 fs-5 fw-bold text-capitalize">{data.title}</span>
                        <p className="px-2 pt-lg-2">{data.description}</p>
                    </div>
                    <span className="border-5 border-bottom border-dark my-2"></span>
                </div>

                {/* Footer Section */}
                <Footer />
            </div>}
        </>
    )
}