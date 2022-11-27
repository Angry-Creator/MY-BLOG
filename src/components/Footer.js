import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="container-fluid overflow-hidden bg-dark">
            <div className="container overflow-hidden">
                <div className="row bg-transparent overflow-hidden gy-5">
                    <div className="col-md-6">
                        <h4 className="text-light text-decoration-none fs-4">Chidera Nwankwo</h4>
                        <p>I have the knowledge and enthusiasm to work on projects.
                            I enjoy difficulties, and I constantly make an effort to reach my objectives. </p>
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
                    <div className="col-md-6">
                        <h4 className="fs-4">Contact</h4>
                        <ul>
                            <li>Email: nwankwochidera.david@gmail.com</li>
                            <li>Phone: (+234-90-706-084-23)</li>
                            <li>Address: Abuja, Nigeria.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row overflow-hidden justify-content-between">
                        <div className="col-auto">
                            <div className="mb-0 text-secondary">This site exlusively belongs to Chidera, Do not clone!</div>
                        </div>
                        <div className="col-auto">
                            <div className="mb-0 text-secondary">Designed By Chidera Nwankwo</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}