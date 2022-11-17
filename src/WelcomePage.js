import brilliantImage from "./brilliant-image.jpg";
import { useEffect } from "react";

export default function WelcomePage() {
    const callApi = async () => {
        await fetch("http://localhost:5000/excercise/", {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json()).catch((error) => console.log(error));
    }

    useEffect(()=>{
        callApi();
    }, []);
    return (
        <div id="WPBox">
            <div id="imgContainer">
                <img src={brilliantImage} alt="not found" />
            </div>
            <div>
                <span className="desc">Username: </span>
                <span className="desc">Name: </span>
                <span className="desc">Password: </span>
            </div>
        </div>
    )
}
