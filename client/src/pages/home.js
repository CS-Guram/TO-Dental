import image1 from "../components/images/image1.png";
import image2 from "../components/images/image2.jpg";
import React, { useState } from "react";
import "./home.css";

function Home() {
  //react state variables for retrieving and posting new appointment data
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [setShow] = useState(false);
  

  const sendEmail = async (e) => {
    e.preventDefault();

    //retrieving and converting frontend data to json format for backend
    const res = await fetch("/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        message,
      }),
    });

    const data = await res.json();

    if (data.status === 401 || !data) {
      console.log("error");
    } else {
      console.log("Email Sent");
      setShow(true);
      setFname("");
      setLname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
    {/* auto fading carousel images */}
      <section>
        <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
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
            <div className="carousel-item active">
              <img src={image2} className="d-block w-100" alt="..." />
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

        {/* modal pop up to schedule a new appointment */}
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
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Schedule An Appointment</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="my-3 w-75">
                      <input
                        type="text"
                        className="form-control"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="First name"
                      />
                    </div>
                    <div className="my-3 w-75">
                      <input
                        type="text"
                        className="form-control"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        placeholder="Last name"
                      />
                    </div>
                    <div className="my-3 w-75">
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                    <div className="w-75">
                      <textarea
                        className="form-control"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={sendEmail}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* details about staff and patient services */}
      <section>
        <div className="col-md-12">
          <div className="section-header text-center p-3 mt-2">
            <h2>OUR SERVICES</h2>
            <p>
            Personalized patient care is what sets T|O Dental Center apart. 
            When you visit one of our location you can expect to receive world class care. 
            Expert specialists and caring staff will provide you with an exceptional 
            health care experience.
            </p>
          </div>
        </div>
        <div className="row m-2">
          <div className="col col-lg pb-3">
            <div className="card text-white text-center bg-info pb-2 ">
              <div className="card-body">
                <i className="fa-solid fa-tooth fa-2xl"></i>
                <h4 className="card-title">Preventive Care</h4>
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

export default Home;