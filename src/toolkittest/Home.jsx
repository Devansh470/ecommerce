import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home=()=>{
    return(
        <>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="counter">Counter app</Nav.Link>
            <Nav.Link as={Link} to="theme">Theme change app</Nav.Link>
            <Nav.Link as={Link} to="todo">Todo list app</Nav.Link>
            <Nav.Link  to="contact">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
        </>
    )
}

export default Home;