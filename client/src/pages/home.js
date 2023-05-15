// import image1 and image2 from their file paths
import image1 from "../components/images/image1.png";
import image2 from "../components/images/image2.jpg";

// import React and useState from their respective libraries
import React, { useState } from "react";

// import the home.css file for styling
import "./home.css";

// define the Home component
function Home() {
  // set up four different state variables using the useState hook
  // fname represents the first name input field
  // lname represents the last name input field
  // email represents the email input field
  // message represents the message input field
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // define the sendEmail function to be called when the form is submitted
  const sendEmail = async (e) => {
    e.preventDefault();

    // use fetch to make a POST request to the /appointment endpoint
    const res = await fetch("/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      // send the four state variables as a JSON object in the request body
      body: JSON.stringify({
        fname,
        lname,
        email,
        message,
      }),
    });

    // parse the response data as JSON
    const data = await res.json();

    // if the status is 401 or the data is not received, log an error message to the console
    if (data.status === 401 || !data) {
      console.log("error");
    } else {
      // otherwise, log a success message to the console and reset the state variables to empty strings
      console.log("Email Sent");
      setFname("");
      setLname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      {/* this section contains a carousel for displaying images */}
      <section>
        {/* the carousel has two slides with unique images and captions */}
        {/* the carousel uses the Bootstrap framework for styling and functionality */}
        {/* the carousel is set to fade between slides */}
        <div
          id="carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          {/* indicators to show the current slide */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            {/* the class carousel-item active is used to display the first item in the carousel as active */}
            <div className="carousel-item active">
              {/* the images are imported using ES6 module syntax and are assigned to variables */}
              <img src={image2} className="d-block w-100" alt="..." />

              {/* The captions are displayed with the Bootstrap class "carousel-caption" */}
              <div className="carousel-caption">
                <h5>Your Smile Belongs Here</h5>
              </div>
            </div>

            <div className="carousel-item">
              <img src={image1} className="d-block w-100" alt="..." />
              <div className="carousel-caption">
                <h5>It Looks Like Dentistry But Its Artistry</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* this section creates a button for scheduling an appointment */}
      {/* When the button is clicked, it opens a modal window using data-bs-toggle and data-bs-target attributes */}
      <section>
        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Schedule An Appointment
          </button>
          <div
            className="modal mt-5"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            {/* The modal contains a form with four input fields for first name, last name, email, and message */}
            {/* The input fields are controlled components, their values are stored in state and updated 
                on change using the setFname, setLname, setEmail, and setMessage functions */}
            <div className="modal-body">
              <div className="modal-dialog">
                <div className="modal-content ">
                  <form className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <h4 className="modal-title p-1 ">
                      Schedule An Appointment
                    </h4>

                    <div className="my-3 w-75">
                      <input
                        type="text"
                        className="form-control"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div className="my-3 w-75">
                      <input
                        type="text"
                        className="form-control"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        placeholder="Last name"
                        required
                      />
                    </div>
                    <div className="input my-3 w-75">
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="w-75">
                      <textarea
                        className="form-control"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        required
                      />
                    </div>
                    {/* Send button which calls the sendEmail function when clicked */}
                    <button
                      type="button"
                      className="btn btn-warning m-2"
                      // closes the current modal when the button is clicked
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      // sendEmail function sends a POST request to the server with the form data,
                      // and logs either an "Email Sent" message or an "error" message depending
                      // on the response from the server
                      onClick={sendEmail}
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* this section displays the services offered by T|O Dental Center */}
      <section>
        {/* class of "col-md-12" used to define the width of the column in a 12-column grid system */}
        <div className="col-md-12">
          {/* "text-center" class used to horizontally center the content within the section-header element, 
        "p-3" class adds padding of 3 units to all sides of the element, 
        and "mt-2" adds margin to the top of the element. */}
          <div className="section-header text-center p-3 mt-2">
            <h2>OUR SERVICES</h2>
            <p>
              Personalized patient care is what sets T|O Dental Center apart.
              When you visit one of our location you can expect to receive world
              class care. Expert specialists and caring staff will provide you
              with an exceptional health care experience.
            </p>
          </div>
        </div>

        {/* row with a margin of 2 units */}
        <div className="row m-2">
          {/* column with a width of 12 units on extra large screens and a bottom padding of 3 units */}
          <div className="col col-lg pb-3">
            {/* card with a white text, centered text alignment, and a blue background color with a bottom padding of 2 units */}
            <div className="card text-white text-center bg-info pb-2 ">
              {/* card body with an icon, a title, and a subtitle */}
              <div className="card-body">
                {/* icon with a solid style and a size of 2x */}
                <i className="fa-solid fa-tooth fa-2xl"></i>

                {/* title with a card title style */}
                <h4 className="card-title">Preventive Care</h4>

                {/* subtitle with a size of 5 and a description of dental cleanings */}
                <h5>Dental cleanings, X-rays, fluorides</h5>
              </div>
            </div>
          </div>
          <div className="col col-lg pb-3">
            <div className="card text-white text-center bg-info pb-2">
              <div className="card-body">
                <i className="fa-solid fa-tooth fa-2xl"></i>
                <h4 className="card-title">Restorative Care</h4>
                <h5>Tooth restoration, filling, crown</h5>
              </div>
            </div>
          </div>
          <div className="col col-lg pb-3">
            <div className="card text-white text-center bg-info pb-2">
              <div className="card-body">
                <i className="fa-solid fa-tooth fa-2xl"></i>
                <h4 className="card-title">Orthodontic</h4>
                <h5>Improper bitesand, crooked teeth</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// exporting the Home component
export default Home;
