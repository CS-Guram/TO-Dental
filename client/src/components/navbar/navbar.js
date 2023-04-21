import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';
import "./navbar.css"

function Header () {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-brand" href="#">
          <NavLink className="nav-link" href="/">
            <span className="text-warning p-2">T|O</span>Dental</NavLink>
        </Navbar.Brand>
        <NavLink className="instagram nav-link p-3" href="https://www.instagram.com/todenta1/" target="_blank"><i className="bi bi-instagram"></i></NavLink>
        <NavLink className="facebook nav-link" href="https://www.facebook.com/gkutaladze" target="_blank"><i className="bi bi-facebook"></i></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav ms-auto">
            <NavLink className="nav-link" href="/">Home</NavLink>
            <NavLink className="nav-link" href="/about">About</NavLink>
            <NavLink className="nav-link" href="/equipments">Equipment</NavLink>
            <NavLink className="nav-link" href="/newPatients">New Patients</NavLink>
            <NavLink  className="nav-link" href="/login">Login</NavLink>
            <NavLink  className="nav-link" href="/dashboard">Dashboard</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;