import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css'

const SignUp = ({ isShowRegister}) => {
  return (
  	<div className={`${isShowRegister ? "active" : ""} show`}>
		  <div className="register-form">
			<div className="form-box solid">
			  <form>
				<h1 className="register-text">Registration</h1><br />

        <br></br>
				<label>Name</label>
				<br></br>
				<input type="text" name="name" className="register-box" />
				<br></br>

        <label>Username</label>
				<br></br>
				<input type="text" name="username" className="register-box" />
				<br></br>

        <label>Password</label>
				<br></br>
				<input type="password" name="password" className="register-box" />
				<br></br>

        <label>Email</label>
				<br></br>
				<input type="email" name="email" className="register-box" />
				<br></br>

				<input type="submit" value="Register" className="register-btn" />
				<p>Do you have an account?</p> 
				<Link to="/login" activeStyle>
          		  login
                </Link>


			  </form>
			</div>
		  </div>
		</div>
  );
};
  
export default SignUp;