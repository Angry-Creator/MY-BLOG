import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameofuser, setNameofuser] = useState("");
  const [photo, setPhoto] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:5000/excercise/", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username" : username,
        "name" : nameofuser,
        "password" : password,
        "photo" : photo
      }),
    }).then(() => {
      navigate("/WelcomePage");
    }).catch((error) => console.log(error));
  }

  return (
    <div id="loginBox">
      <form id="loginForm" method="POST" onSubmit={(event) => submit(event)}>
        <span>Login Form</span>
        <label>Username</label>
        <input type="text" name="username" onChange={(event)=>setUsername(event.target.value)}/>
        <label>Name</label>
        <input type="text" name="name" onChange={(event)=>setNameofuser(event.target.value)}/>
        <label>Password</label>
        <input type="text" name="password" onChange={(event)=>setPassword(event.target.value)}/>
        <label>Upload Photo</label>
        <input type="file" name="photo" onChange={(event)=>setPhoto(event.target.files[0])}/>
        <input id="submitBtn" type="submit" value="Login" />
      </form>
    </div>
  )
}