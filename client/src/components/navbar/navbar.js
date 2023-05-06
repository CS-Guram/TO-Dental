import React from "react";
import "./navbar.css";

function Header() {
  return (
    //fully collapsable navbar using bootstrap CSS
    //external links to facebook and instagram
    //return to home page by clicking the brand name or home button
    //navigation links to various pages of the brand
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand text-warning p-2" href="/">
          T|O Dental
        </a>
        <a
          className="facebook p-3 nav-link"
          href="https://www.facebook.com/gkutaladze"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          className="instagram nav-link"
          href="https://www.instagram.com/todenta1/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
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
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;