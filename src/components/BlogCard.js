import { Link } from "react-router-dom"

export default function BlogCard({ itemOne, itemTwo, itemThree }) {
    return (
        <div className="row overflow-hidden my-2 mx-md-2 gx-lg-2 gy-2 blog-row-card">
            <div className="col-12 col-md-4 p-2">
                {(itemOne != null) && <div className="rounded px-2 py-2 border border-secondary overflow-hidden">
                    <div className="picture-frame rounded">
                        <img src={itemOne.image} className="picture" alt="failed to load" />
                    </div>
                    <span className="d-block text-center mt-2 bg-dark text-light text-nowrap itemOneTitle">{itemOne.title}</span>
                    <p className="blog-short-desc my-2 py-2 text-break itemOneDesc overflow-hidden">{itemOne.description}</p>
                    <Link className="custom-link border border-dark rounded px-3 py-2" state={{ data: itemOne }} to="/blog">
                        <span>Read More</span>
                        <i className="bi-arrow-right"></i>
                    </Link>
                </div>}
            </div>
            <div className="col-12 col-md-4 p-2">
                {(itemTwo != null) && <div className="rounded px-2 py-2 border border-secondary overflow-hidden">
                    <div className="picture-frame rounded">
                        <img src={itemTwo.image} className="picture" alt="failed to load" />
                    </div>
                    <span className="d-block text-center mt-2 bg-dark text-light text-nowrap itemOneTitle">{itemTwo.title}</span>
                    <p className="blog-short-desc my-2 py-2 text-break itemOneDesc overflow-hidden">{itemTwo.description}</p>
                    <Link className="custom-link border border-dark rounded px-3 py-2" state={{ data: itemTwo }} to="/blog">
                        <span>Read More</span>
                        <i className="bi-arrow-right"></i>
                    </Link>
                </div>}
            </div>
            <div className="col-12 col-md-4 p-2">
                {(itemThree != null) && <div className="rounded px-2 py-2 border border-secondary overflow-hidden">
                    <div className="picture-frame rounded">
                        <img src={itemThree.image} className="picture" alt="failed to load" />
                    </div>
                    <span className="d-block text-center mt-2 bg-dark text-light text-nowrap itemOneTitle">{itemThree.title}</span>
                    <p className="blog-short-desc my-2 py-2 text-break itemOneDesc overflow-hidden">{itemThree.description}</p>
                    <Link className="custom-link border border-dark rounded px-3 py-2" state={{ data: itemThree }} to="/blog">
                        <span>Read More</span>
                        <i className="bi-arrow-right"></i>
                    </Link>
                </div>}
            </div>
        </div>
    )
}