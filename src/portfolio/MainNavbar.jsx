
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet} from 'react-router-dom';

import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Services from "./Services";
import Masterpiece from "./Masterpiece";
import Blog from "./Blog";
import Skills from "./Skills";
import Contact from "./Contact";

const MainNavbar=()=>{
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark" style={{position:"absolut", zIndex:1}}>
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
          {/* <Link to="about me">About Me</Link>
          <Link to="hero">Hero</Link>
      <Link to="services">Services</Link>
      <Link to="skills">Skills</Link>
      <Link to="masterpiece">Masterpiece</Link>
      <Link to="blog">Blog</Link>
      <Link to="contact">Contact</Link> */}
            <Nav.Link as={Link} to="Hero">Hero</Nav.Link>
            <Nav.Link as={Link} to="Aboutme">About Me</Nav.Link>
            <Nav.Link as={Link} to="Services">Services</Nav.Link>
            <Nav.Link as={Link} to="Skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="Masterpiece">Masterpiece</Nav.Link>
            <Nav.Link as={Link} to="Blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet/>
    <Hero/>
    <Aboutme/>
    <Services/>
    <Masterpiece/>
    <Blog/>
    <Skills/>
    <Contact/>


   
        </>
    )
}

export default MainNavbar;