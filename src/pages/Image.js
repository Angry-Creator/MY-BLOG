import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Image() {
    const [isAvailable, setIsAvailable] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const setAvailability = () => {
        if (location.state == null) {
            navigate("/");
        } else {
            setIsAvailable(true);
        }
    }
    useEffect(() => {
        setAvailability();
        
    }, []);//eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="container-fluid oveflow-scroll">
            {(isAvailable) && <img src={location.state.imagePath} alt="Not found" />}
        </div>
    )
}