import brilliantImage from "./brilliant-image.jpg";
import { useEffect } from "react";

export default function WelcomePage() {
    //Call Api that fetches, (get) the data from the server
    const callApi = async () => {
        const response = await fetch("http://localhost:5000/excercise/", {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json()).catch((error) => console.log(error));
        console.log("DATA STORED: ", response);
    }

    //React onmount action. That is it calls the api on component mount only
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
