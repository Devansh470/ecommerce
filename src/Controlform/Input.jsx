
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';


const Input=()=>{

  const [input,setinput]=useState({});
  const handelform=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setinput((values)=>({...values,[name]:value}))
  }

  const handlebutton=()=>{
    let api="http://localhost:3000/dtat";
    axios.post(api,input).then((res)=>{
      alert("your data input successfully")
    })

  }

    return(
        <>
    <Form style={{width:"500px", margin:"40px 0px 40px 500px",border:"4px solid gold", borderRadius:"20px"}}>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b> Rollno </b></Form.Label>
        <Form.Control type="email"  name='Rollno' onChange={handelform}
        placeholder="Enter your Rollno" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b> Name </b></Form.Label>
        <Form.Control type="email" name='Name' onChange={handelform}
        placeholder="Enter your Name" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b> City </b></Form.Label>
        <Form.Control type="email" name='City' onChange={handelform}
        placeholder="Enter your City" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b> Fess </b></Form.Label>
        <Form.Control type="email" name='Fess' onChange={handelform}
        placeholder="Enter your Fess" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Button variant="success" onClick={handlebutton} style={{margin:"25px 0px 30px 200px "}}>Submit</Button>{' '}
    </Form>
        </>
    )
}

export default Input;
