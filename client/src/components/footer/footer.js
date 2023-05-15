// importing the React library for creating React components
import React from "react";

// import the CSS file for styling
import "./footer.css";

// defining the Footer component
function Footer() {
  return (
    
    // defining the footer element with a class for styling
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">

          {/* add a horizontal rule to the row */}
          <hr className="clearfix w-100 d-md-none pb-0" />

          {/* defining three columns within the row */}
          <div className="col-lg">

            {/* add a map icon */}
            <i className="bi bi-geo-alt"></i>
            <br />
            <br />
            <h5 className="text-uppercase">Location</h5>
            <div className="list-unstyled">
              <i> 1629 west 10th Street </i>
              <br></br>
              <i> Brooklyn, NY 11223 </i>
            </div>
          </div>
          <div className="col-lg">

            {/* add a clock icon */}
            <i className="bi bi-clock"></i>
            <br />
            <br />
            <h5 className="text-uppercase">Hours of operation</h5>
            <hr></hr>

            {/* add a horizontal rule to the column */}
            <div className="list-unstyled">
              <i> Monday - Thrusday</i>
              <br></br>
              <i>9:00 AM - 6:00 PM </i>
              <br></br>
              <i>
                {" "}
                Friday{" "}
                <i>
                  <br></br>
                </i>
                9:30 AM - 6:30 PM{" "}
              </i>
            </div>
          </div>
          <div className="col-lg">

            {/* add a telephone icon */}
            <i className="bi bi-telephone "></i>
            <br />
            <br />
            <h5 className="text-uppercase">Contact Us</h5>
            <div className="list-unstyled">
              <i>(347)-577-3338</i>
              <br></br>
              <i>todental@gmail.com</i>
            </div>
          </div>
        </div>
      </div>

      {/* define the footer's bottom section */}
      <div className="footer-copyright text-center py-3">
        &copy; {new Date().getFullYear()} | THCC MEMS INC | All rights reserved
        | Terms of Srvice | Privacy
      </div>
    </footer>
  );
}

// exporting the Footer component
export default Footer;