import Footer from "../components/Footer";

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
                <Footer/>
            </section>
        </>
    )
}