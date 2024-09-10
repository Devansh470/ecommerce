import { Link, Outlet, useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Mainpage=()=>{
    const {id}=useParams();
    
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to={`/checkout/${id}`}>checkout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       <Outlet/>
        
        </>
    )
}

export default Mainpage;