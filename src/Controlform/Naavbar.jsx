
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const Naavbar=()=>{

    return(
      <>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="input">Input</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="update">Update</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{margin:"20px", border:"3px solid lightblue", borderRadius:"10px",}}>
      <Outlet />
      </div>
      </>
    )
}

export default Naavbar;
