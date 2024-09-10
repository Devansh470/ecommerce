import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Topnavbar=()=>{
  const datacount=useSelector((state)=>state.addcart.cart)
  const count=datacount.length;
  const navigate=useNavigate()

  const gotocart=()=>{
    navigate("/mycart")
  }

    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{position:"sticky", zIndex:1, top:0}}>
      <Container>
        <Navbar.Brand href="#home"><img src="./image/logoimg.png" width={150}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" style={{color:"black"}}>Home</Nav.Link>
            <Nav.Link as={Link} to="new" style={{color:"black"}}>New</Nav.Link>
            <Nav.Link as={Link} to="services" style={{color:"black"}}>Services</Nav.Link>
            <Nav.Link as={Link}  to="product" style={{color:"black"}}>Product</Nav.Link>
            <Nav.Link as={Link}  to="sale" style={{color:"black"}}>Sale</Nav.Link>
            <Nav.Link as={Link} to="blog" style={{color:"black"}}>Blog</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown" >
              <NavDropdown.Item as={Link} to="menshoes" >Mens Shoes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="womenshoes">Women Shoes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="menslippers">Men Slippers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="womenslippers">Women Slippers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  href="trending">
                Trending products
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{color:"black", fontSize:"20px"}}><FaSearch /></Nav.Link>
            <Nav.Link href="#memes" style={{color:"black", fontSize:"20px"}}><FaUserAlt/></Nav.Link>
            <Nav.Link href="#deets" style={{color:"black", fontSize:"20px"}} onClick={()=>{gotocart()}}><FaCartShopping/>
            {count<=0?"":<span style={{padding:"0px 6px 0px 0px", borderRadius:"50%",margin:"0px 0px 0px 5px", border:"1px solid grey", backgroundColor:"lightgreen", color:"black"}}> <b> {count}</b></span>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Topnavbar;