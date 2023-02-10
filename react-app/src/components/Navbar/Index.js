/*source https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_responsive_header */
import React from "react";
import './header.css';

import { NavLink } from "./NavbarElements";

const Navbar = () => {
return (
	
// Logo
<div className="header">

	<div className="header-right">
	   
	      <NavLink to="/home" activeStyle>
            Home
          </NavLink>	
		  <NavLink to="/about" activeStyle>
            About
          </NavLink>
		  <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
      <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
		  <NavLink to="/login" activeStyle>
            Login
          </NavLink>  
		  <NavLink to="/newPatients" activeStyle>
            New Patients
          </NavLink>
      <NavLink to="/sign-up" activeStyle>
            Sign Up
      </NavLink>
	</div>

<div/>
</div>

);
};

export default Navbar;