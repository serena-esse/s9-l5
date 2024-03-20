import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser, FaSearch } from "react-icons/fa";
import { PiBellSimpleFill } from "react-icons/pi";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <Container fluid className="bg-dark">
      <Navbar expand="lg" className="bg-dark ">
        <Navbar.Brand href="#home">
          <img alt="logo" src="../../assets/logo.png" width="100px"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-secondary" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-light">
            <Nav.Link href="#home" className="text-secondary fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="/tv-shows" className="text-secondary fw-bold">
              <div className={location.pathname === "/tv-shows" ? "nav-link active" : "nav-link"}>Tv Shows</div>
            </Nav.Link>
            <Nav.Link href="#link" className="text-secondary fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#link" className="text-secondary fw-bold">
              Recently added
            </Nav.Link>
            <Nav.Link href="#link" className="text-secondary fw-bold">
              My list
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FaSearch className="icon" />
            </Nav.Link>
            <Nav.Link href="#deets">
              <div id="kids" className="text-white mt-1 fw-bold">
                KIDS
              </div>
            </Nav.Link>
            <Nav.Link href="#deets">
              <PiBellSimpleFill className="icon" />
            </Nav.Link>
            <Nav.Link href="#deets">
              <FaUser className="icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBar;
