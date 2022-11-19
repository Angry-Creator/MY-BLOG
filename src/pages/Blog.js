import { useLocation } from "react-router"

export default function Blog(){
    const location = useLocation();
    const { data } = location.state;
    return(
        <div className="container-fluid">
            Work in Progess!!!
            <span className="d-block">{JSON.stringify(data)}</span>
        </div>
    )
}