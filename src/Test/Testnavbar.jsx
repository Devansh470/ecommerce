import { Link, Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Testnavbar=()=>{
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" style={{color:"white"}}> <b> Home |</b></Nav.Link>
            <Nav.Link as={Link} to="about" style={{color:"white"}}> <b> About |</b></Nav.Link>
            <Nav.Link as={Link} to="services" style={{color:"white"}}> <b> Services |</b></Nav.Link>
            <Nav.Link as={Link} to="placement" style={{color:"white"}}> <b>Placement |</b></Nav.Link>
            <Nav.Link as={Link} to="gallery" style={{color:"white"}}><b>Gallery |</b></Nav.Link>
            <Nav.Link as={Link} to="contactus" style={{color:"white"}}><b>Contact us </b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>

        </>
    )
}

export default Testnavbar;