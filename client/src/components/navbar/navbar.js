import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./navbar.css"

function Header () {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-brand" href="#">
          <Nav.Link><Link className="nav-link" to="/">
            <span className="text-warning p-2">T|O</span>Dental</Link></Nav.Link>
        </Navbar.Brand>
        <Nav.Link><Link className="instagram nav-link p-3" to="https://www.instagram.com/todenta1/"><i class="bi bi-instagram"></i></Link></Nav.Link>
        <Nav.Link><Link className="facebook nav-link" to="https://www.facebook.com/gkutaladze"><i class="bi bi-facebook"></i></Link></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav ms-auto">
            <Nav.Link><Link className="nav-link" to="/">Home</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="/About">About</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="/Services">Services</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="/NewPatients">New Patients</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="/Login">Login</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;