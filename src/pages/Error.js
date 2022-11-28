import { Link } from "react-router-dom";

export default function Error(){
    return(
        <div className="container p-5 d-flex flex-column bg-secondary rounded my-5 text-light justify-content-center align-items-center">
            <span className="d-block fs-3">404 Error, Page Not Found</span> 
            <span className="d-block">Back to <Link to="/" className="fs-2 text-light">Homepage </Link></span>
        </div>
    )
}