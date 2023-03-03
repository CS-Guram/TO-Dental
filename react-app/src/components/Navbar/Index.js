/*source https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_responsive_header */
import React from "react";
import './Header.css';

import { NavLink } from "./NavbarElements";

const Navbar = () => {
return (
	
// Logo
<div className="header">
	    <div className="logo">
          <NavLink to="/home" activeStyle>
		    <h1>T|O DENTAL</h1>
          </NavLink>	
		  </div>

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
{/* Social Media Links */}
<span className="instagram">
<a href="https://www.instagram.com/todenta1/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram fa-lg"></i></a>
</span>
<span className="facebook">
<a href="https://www.facebook.com/gkutaladze" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook fa-lg"></i></a>
</span>
<div/>
</div>

);
};

export default Navbar;