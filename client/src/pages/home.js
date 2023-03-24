import image1 from '../components/images/image1.png'
import image2 from '../components/images/image2.jpg'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import './home.css';

function Home () {
    
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendEmail = async(e)=>{
        e.preventDefault();
  
   
    const res = await fetch("/register",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
          },body:JSON.stringify({
            fname, lname, email, message
        })
    });
          
    
    const data = await res.json();
  
    if(data.status ===401 || !data){
        console.log("error")
    }else{
        console.log("Email Sent");
        setShow(true);
        setFname("");
        setLname("");
        setEmail("");
        setMessage("")
        }
    }

    return (
    <>
<section>
<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div Class="carousel-inner">
    <div Class="carousel-item active" data-bs-interval="8000">
      <img src={image2} Class="d-block w-100" alt="..."/>
      <div Class="carousel-caption">
      <Button variant="warning" onClick={handleShow}>Schedule An Appointment</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Schedule An Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group class="w-75">
                <Form.Control type="text" name="fname" value= {fname} onChange={(e)=>setFname(e.target.value)} placeholder="First name"/>
            </Form.Group>
            <Form.Group class="w-75">
                <Form.Control type="text" class="lname" value={lname} onChange={(e)=>setLname(e.target.value)} placeholder="Last name"/>
            </Form.Group>
                <Form.Group class="w-75">
            <Form.Control type="text" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                </Form.Group>
            <Form.Group class="w-75" >
                    <textarea className="form-control" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={sendEmail}>Send</Button>
        </Modal.Footer>
      </Modal>
        <h5>Your Smile Belongs Here</h5>  
      </div>
    </div>
    <div Class="carousel-item">
      <img src={image1} Class="d-block w-100" alt="..."/>
      <div Class="carousel-caption">
      <Button variant="warning" onClick={handleShow}>Schedule An Appointment</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Schedule An Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group class="my-3 w-75">
                <Form.Control type="text" name="fname" value= {fname} onChange={(e)=>setFname(e.target.value)} placeholder="First name"/>
            </Form.Group>
            <Form.Group class="my-3 w-75">
                <Form.Control type="text" class="lname" value={lname} onChange={(e)=>setLname(e.target.value)} placeholder="Last name"/>
            </Form.Group>
                <Form.Group class="my-3 w-75">
            <Form.Control type="text" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                </Form.Group>
            <Form.Group class="w-75" >
                    <textarea className="form-control" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={sendEmail}>Send</Button>
        </Modal.Footer>
      </Modal>
        <h5>It Looks Like Dentistry But Its Artistry</h5>    
      </div>
    </div>
  </div>
</div>
</section>

<section id="services" className="services section-padiing">
      <div className="col-md-12">
        <div className="section-header text-center pb-5 mt-5">
          <h2>OUR SERVICES</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Illo minus sunt a non porro facere delectus vero odio molestiae 
            perspiciatis nobis officia itaque expedita, rem corporis voluptates 
            veritatis alias distinctio?</p>
        </div>
      </div>
      <div className="row m-2">
        <div className="col col-lg pb-3">
          <div className="card text-white text-center bg-info pb-2 ">
            <div className="card-body">
            <FontAwesomeIcon icon={faHome} />
            <h4 class="card-title">Preventive Care</h4>
            <p>Dental cleanings, X-rays, fluorides</p>
            </div>
          </div>
        </div>
        <div className="col col-lg pb-3">
          <div className="card text-white text-center bg-info pb-2">
            <div className="card-body">
            <FontAwesomeIcon icon={faHome} />
            <h4 class="card-title">Restorative Care</h4>
            <p>Tooth restoration, filling, crown</p>
            </div>
          </div>
        </div>
        <div className="col col-lg pb-3">
          <div className="card text-white text-center bg-info pb-2">
            <div className="card-body">
            <FontAwesomeIcon icon={faHome} />
            <h4 class="card-title">Orthodontic</h4>
            <p>Improper bitesand, crooked teeth</p>
            </div>
          </div>
        </div>
    </div>
</section>


</>
    
)
};

export default Home;


