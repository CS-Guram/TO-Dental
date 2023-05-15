// import React hooks
import React, { useState } from "react";

// importing CSS file for styling the login page
import "./loginSignup.css";

// importing Axios library for making HTTP requests
import Axios from "axios";

// importing hooks for navigating and linking within the app
import { useNavigate, Link } from "react-router-dom";

// defining the Login component
function Login() {

  // hook for navigating within the app
  const navigate = useNavigate();

  // setting up state variables using useState hook
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  // function for handling login submission
  const login = (e) => {

    // prevents default form submission behavior
    e.preventDefault();

    // sending a post request to the backend with the form data
    Axios.post("http://localhost:3001/login", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {

      // logging the response received from the backend
      console.log(response);

      // if there's an error message in the response, display it
      if (response.data.message) {
        setLoginStatus(response.data.message);

      // otherwise, store user email in local storage and navigate to the dashboard
      } else {
        console.log("Navigating to user dashboard...");
        const email = response.data.email;

        // store user email in localStorage
        localStorage.setItem("userEmail", email); 
        
        // check if email is stored in localStorage
        if (localStorage.getItem("userEmail") !== null) {
          console.log("Email is stored in localStorage");
        } else {
          console.log("Email is not stored in localStorage");
        }

         // navigate to the dashboard
        navigate("/dashboard"); // navigate to the dashboard
      }
    });
  };

  return (
    
    // defines a class box
    <div className="box">

    {/* defines a class loginForm */}
      <div className="loginForm">
        <form>
          <h4>Sign in</h4>

          {/* email Input Field */}
          <label htmlFor="email">Email*</label>
          <input
            className="textInput"
            type="email"
            name="email"

            // an event handler that is triggered when the value of the email input field is changed,
            // the new value of the input field is obtained from the event object's target.value property, 
            // and it is passed to the setEmail function to update the email state.
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your Email"
            required
          />

          {/* Username Input Field */}
          <label htmlFor="username">Username*</label>
          <input
            className="textInput"
            type="username"
            name="username"

            // an event handler that is triggered when the value of the username input field is changed,
            // the new value of the input field is obtained from the event object's target.value property, 
            // and it is passed to the setUsername function to update the email state.
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Enter your Username"
            required
          />

          {/* Password Input Field */}
          <label htmlFor="password">Password*</label>
          <input
            className="textInput"
            type="password"
            name="password"

            // an event handler that is triggered when the value of the password input field is changed,
            // the new value of the input field is obtained from the event object's target.value property, 
            // and it is passed to the setPassword function to update the email state.
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your Password"
            required
          />

          {/* Login Button */}
          <input
            className="button"
            type="submit"
            onClick={login}
            value="Login"
          />

          {/* link to sign up page */}
          <Link to="/sign-up" activestyle="true">
            Create your T|O Dental account
          </Link>

          {/* error Message */}
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

// exporting the Home component
export default Login;
