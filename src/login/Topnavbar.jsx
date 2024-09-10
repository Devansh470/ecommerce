import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,Outlet} from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const Topnavbar=()=>{
    const mynav=useNavigate();
    const [input, setinput]=useState({})
    const [userid, setUserid]=useState("")
    const [pwd, setPwd]=useState("")

    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [showlogin, setShowlogin] = useState(false);
  const handleCloselogin = () => setShowlogin(false);
  const handleShowlogin = () => setShowlogin(true);

    const handleinput=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setinput((values)=>({...values, [name]:value}))
    }
    const handlesubmit=()=>{
        let api="http://localhost:3000/data"
        axios.post(api,input).then((res)=>{
            handleClose()
            toast.success("You are Succesfully Regitered!!!");
        })
    }

    const handleLogin=()=>{
        let api=`http://localhost:3000/data?username=${userid}`
        axios.get(api).then((res)=>{
           if(res.data.length>=1)
            {
                if (res.data[0].password==pwd)
                {
                    console.log(res)
                  localStorage.setItem("uname", res.data[0].name) 
                  localStorage.setItem("uemail", res.data[0].email)
     
                 mynav("/deshboard")
                 setShowlogin(false)
                }
                else 
                {
                 alert("Wrong Password!!!")
                }
             }
           else
           {
            alert("galat hai bhai!!")
           }
        
        })
    }
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link  onClick={handleShowlogin}>Login</Nav.Link>
            <Nav.Link  onClick={handleShow} >registration</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Name</Form.Label>
              <Form.Control type="text" name="name" onChange={handleinput}
              autoFocus 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control type="email" name="email" onChange={handleinput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Username</Form.Label>
              <Form.Control type="text" name="username" onChange={handleinput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleinput}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlesubmit}>
            Registor
          </Button>
        </Modal.Footer>
      </Modal>



{/* ------------------------------------------------ login page start---------------------------------------------------------- */}



      <Modal show={showlogin} onHide={handleCloselogin}>
        <Modal.Header closeButton>
          <Modal.Title>User Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter UserID</Form.Label>
              <Form.Control
                type="text"  name="username"  value={userid} onChange={(e)=>{setUserid(e.target.value)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password" name="password"  value={pwd} onChange={(e)=>{setPwd(e.target.value)}}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloselogin}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
           Login
          </Button>
        </Modal.Footer>
      </Modal>

      <Outlet/>
      <ToastContainer />
        </>
    )
}

export default Topnavbar;