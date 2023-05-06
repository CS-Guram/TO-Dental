import React, { useState } from "react";
import './loginRegister.css';
import Axios from "axios";
import { useNavigate , Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");


  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        console.log("Navigating to user dashboard...");
        const email = response.data.email;
        localStorage.setItem("userEmail", email); // store user email in localStorage
        if (localStorage.getItem("userEmail") !== null) {
          console.log("Email is stored in localStorage");
        } else {
          console.log("Email is not stored in localStorage");
        }
        navigate('/dashboard'); // navigate to the dashboard
      }
    });
  };

  return (
        
    <div className="box">
      <div className="loginForm">
        <form>
          <h4>Sign in</h4>
          <label htmlFor="email">Email*</label>
          <input
            className="textInput"
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="username">Username*</label>
          <input
            className="textInput"
            type="username"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            placeholder="Enter your Username"
            required
          />
          <label htmlFor="password">Password*</label>
          <input
            className="textInput"
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            placeholder="Enter your Password"
            required
          />

          <input className="button" type="submit" onClick={login} value="Login" />

          <Link to="/sign-up" activestyle="true">
            Create your T|O Dental account
          </Link>
          <h1
            style={{
              color: "red",
              fontSize: "15px",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            {loginStatus}
          </h1>
        </form>
      </div>
    </div>
  );
}

export default Login;