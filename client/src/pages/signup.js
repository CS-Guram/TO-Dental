// import React hooks
import React, { useState } from "react";

// importing Axios library for making HTTP requests
import Axios from "axios";

// importing CSS file for styling the login page
import './loginSignup.css';

// importing the Link component from the react-router-dom library
import { Link } from 'react-router-dom';

// defining the SignUp component
function SignUp() {

	// setting up state variables using useState hook
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [registerStatus, setRegisterStatus] = useState("");
  
	// function for handling login submission
	const register = (e) => {

	// prevents default form submission behavior
	  e.preventDefault();

	  // sending a post request to the backend with the form data
	  Axios.post("http://localhost:4001/register", {
		email: email,
		username: username,
		password: password,
	  }).then((response) => {

		// after the POST request is complete, this callback function is executed.
		if (response.data.message) {

		// if the response contains a "message" property, set the "registerStatus" state to its value.
		  setRegisterStatus(response.data.message);
		} else {
		
		// if the response does not contain a "message" property, set the "registerStatus" 
		// state to "ACCOUNT CREATED SUCCESSFULLY".
		  setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
		}
	  });
	};
  
	return (

	// defines a class box
	<div className="box">

	{/* defines a class loginForm */}
	  <div className="loginForm">
		<form>
		  <h4>Create account</h4>

		  {/* Email Input Field */}
		  <label htmlFor="email">Email Address*</label>
		  <input
			className="textInput"
			type="text"
			name="email"

			// an event handler that is triggered when the value of the email input field is changed,
            // the new value of the input field is obtained from the event object's target.value property, 
            // and it is passed to the setEmail function to update the email state.
			onChange={(e) => {
			  setEmail(e.target.value);
			}}
			placeholder="Enter your Email Address"
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

		  {/* Submit Button */}
		  <input
			className="button"
			type="submit"
			onClick={register}
			value="Create an account"
		  />
		<p>Already have an account? </p>
		<div id="signup">
		    <Link to="/login" activestyle="true">
          		Click here to Sign in
            </Link>
		</div>
		  <h1
			style={{
			  fontSize: "15px",
			  textAlign: "center",
			  marginTop: "20px",
			}}
		  >
			{registerStatus}
		  </h1>
		</form>
	  </div>
	  </div>
	);
  }

// exporting the SignUp component
export default SignUp;


