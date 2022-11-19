import { Link } from "react-router-dom"

export default function Contact() {
    return (
        <>
            {/* Contact */}
            <section id="contact" className="section-connector">
                <div className="container-fluid section-padding">
                    <div className="row overflow-hidden">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h1 className="fs-4 bg-dark text-light fw-bold py-3">Contact</h1>
                                <p>My contact information is shown below if you need to get in touch with me or if you have any work. .</p>
                            </div>
                        </div>
                    </div>
                    <div className="row overflow-hidden justify-content-center mb-2">
                        <div className="col-md-8">
                            <form className="row overflow-hidden g-3">
                                <div className="form-group col-md-4">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group col-md-4">
                                    <input type="tel" className="form-control" placeholder="Phone Number" />
                                </div>
                                <div className="form-group col-md-4">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="text" className="form-control" placeholder="Enter Subject" />
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea name="" className="form-control" rows="4" placeholder="Enter Your Message"></textarea>
                                </div>
                                <div className="form-group text-center col-md-12">
                                    <button className="btn bg-light border border-dark text-dark">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

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
            </section>
        </>
    )
}