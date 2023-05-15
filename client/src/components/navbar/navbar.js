// importing the React library for creating React components
import React from "react";

// importing a CSS file for styling the navbar
import "./navbar.css";

// defining the Header component that returns the navbar JSX
function Header() {
  return (
   
  // creating a Bootstrap navbar component with a background color
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

      {/* adding a branding logo with a hyperlink to the home page */}
        <a className="navbar-brand text-warning p-2" href="/">
          T|O Dental
        </a>

        {/* adding a Facebook link with a Facebook icon */}
        <a
          className="facebook p-3 nav-link"
          href="https://www.facebook.com/gkutaladze"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-facebook"></i>
        </a>

        {/* adding an Instagram link with an Instagram icon */}
        <a
          className="instagram nav-link"
          href="https://www.instagram.com/todenta1/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>

        {/* adding a collapsible hamburger menu for mobile devices */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* adding a list of links to different pages on the website */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto p-2">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/equipments">
                Equipment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/newPatients">
                New Patient
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// exporting the Header component as a default export to use in other parts of the code
export default Header;