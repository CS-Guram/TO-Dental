import React from "react";
import "./footer.css";

function Footer() {
  return (
    //icons related to brands operation details based on topic
    //business location, hours of operation and contact information
    //auto copyright year adjustment at the bottom of the footer
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-lg">
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
            <i className="bi bi-clock"></i>
            <br />
            <br />
            <h5 className="text-uppercase">Hours of operation</h5>
            <hr></hr>
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

      <div className="footer-copyright text-center py-3">
        &copy; {new Date().getFullYear()} | THCC MEMS INC | All rights reserved
        | Terms of Srvice | Privacy
      </div>
    </footer>
  );
}

export default Footer;