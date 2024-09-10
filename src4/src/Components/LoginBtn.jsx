import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {  message } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginBtn=()=>{
     const [input, setInput]=useState({});
     const [email, setEmail]=useState("");
     const [password, setPassword]=useState("");

      const mynav= useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showlogin, setShowlogin] = useState(false);
    const handleCloselogin = () => setShowlogin(false);
    const handleShowlogin = () => setShowlogin(true);
   

   const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput(values=>({...values, [name]:value}))
   }
   const handleSubmit=()=>{
      let api="http://localhost:3000/customer";
      axios.post(api, input).then((res)=>{
        setShow(false);
        message.success("You are Registered!!!")
      })   
   }


   const handleSubmitlogin=()=>{{
      let api=`http://localhost:3000/customer/?email=${email}`;
      axios.get(api).then((res)=>{
         if (res.data.length>=1)
         {
             if(res.data[0].password==password)
             {
                 localStorage.setItem("username", res.data[0].name);
                 localStorage.setItem("useremail", res.data[0].email);
                 message.success("You are Succesfully Loged in")
                 mynav("/dashboard");
             }
             else 
             {
              alert("galat pwd")
             }
         }
         else
         {
          alert("Galat")
         }


      })
   }}
  
    return(
        <>
         <div id='buttonbox'>
         <Button variant="primary" onClick={handleShowlogin} >Login</Button>
          
         <Button variant="primary" onClick={handleShow}>Registration</Button>
         </div>


         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter name</Form.Label>
              <Form.Control
                type="text" name="name" onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email" name="email" onChange={handleInput}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password" name="password" onChange={handleInput}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Registration
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showlogin} onHide={handleCloselogin}>
        <Modal.Header closeButton>
          <Modal.Title>User Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password" name="password"  value={password}
                 onChange={(e)=>{setPassword(e.target.value)}}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloselogin}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitlogin} >
           Login
          </Button>
        </Modal.Footer>
      </Modal>


     
        </>
    )
}
export default LoginBtn;