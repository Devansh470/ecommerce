import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

const Nonac1room=()=>{

    const [input,setinput]=useState({});

    const handelform=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setinput((values)=>({...values,[name]:value}))
      console.log(input)
    }
  
    const handlebutton=()=>{
      let api="http://localhost:3000/data";
      axios.post(api,input).then((res)=>{
        alert("your data input successfully")
      })
  
    }
  
      return(
          <>
      <Form style={{width:"500px", margin:"40px 0px 40px 500px",border:"4px solid gold", borderRadius:"20px"}}>
        <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
          <Form.Label> <b> No of days </b></Form.Label>
          <Form.Control type="email"  name='day' onChange={handelform}
          placeholder="Enter No of days" style={{color:"red", border:"2px solid blue"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
          <Form.Label> <b> Name </b></Form.Label>
          <Form.Control type="email" name='name' onChange={handelform}
          placeholder="Enter your Name" style={{color:"red", border:"2px solid blue"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
          <Form.Label> <b> City </b></Form.Label>
          <Form.Control type="email" name='city' onChange={handelform}
          placeholder="Enter your City" style={{color:"red", border:"2px solid blue"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
          <Form.Label> <b> Price Per Night </b></Form.Label>
          <Form.Control type="email" name='night' value={"10599"} onClick={handelform}
          placeholder="" style={{color:"red", border:"2px solid blue"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
          <Form.Label> <b> The Room You Choose </b></Form.Label>
          <Form.Control type="email" name='room' value={"single non ac room"} onClick={handelform}
          placeholder="" style={{color:"red", border:"2px solid blue"}}/>
        </Form.Group>
        <Button variant="success" onClick={handlebutton} style={{margin:"25px 0px 30px 200px "}}>Submit</Button>{' '}
      </Form>
          </>
      )
  }


export default Nonac1room;