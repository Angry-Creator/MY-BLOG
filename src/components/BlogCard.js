import { Link } from "react-router-dom"

export default function BlogCard({ item }) {
    return (
        <div className="col-12 col-md-4 p-2">
            {(item != null) && <div className="rounded px-2 py-2 border border-secondary overflow-hidden">
                <div className="picture-frame rounded">
                    <Link className="d-block blog-image-container" to="/image" state={{ imagePath: item.image }}>
                        <img src={item.image} className="picture" alt="failed to load" loading="lazy" />
                    </Link>
                </div>
                <span className="d-block text-center mt-2 bg-dark text-light text-nowrap text-capitalize itemOneTitle">{item.title}</span>
                <p className="blog-short-desc my-2 py-2 text-break itemOneDesc overflow-hidden">{item.description}</p>
                <Link className="custom-link border border-dark rounded px-3 py-2" state={{ data: item }} to="/blog">
                    <span>Read More</span>
                    <i className="bi-arrow-right"></i>
                </Link>
            </div>}
        </div>
    )
}