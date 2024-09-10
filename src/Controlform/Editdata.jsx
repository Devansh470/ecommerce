import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useEffect, useState } from "react";

const Editdata=()=>{
    const {id}=useParams();
    const [mydata, setmydata]=useState({})
    const loadData=()=>{
        let url=`http://localhost:3000/dtat/${id}`
        axios.get(url).then((res)=>{
            setmydata(res.data)
        })
    }
    useEffect(()=>{
        loadData()
    },[])
    const handleform=(e)=>{
        let name=e.target.name;
        let value=e.target.value
        setmydata((values)=>({...values, [name]:value}))
    }
    const handlesubmit=()=>{
        let api=`http://localhost:3000/dtat/${id}`
        console.log(mydata)
        axios.put(api,mydata).then((res)=>{
            alert("data updated!!!")
        })
    }
    return(
        <>
        <h1>edit data</h1>
        <Form style={{width:"500px", margin:"40px 0px 40px 500px",border:"4px solid gold", borderRadius:"20px"}}>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b> Rollno </b></Form.Label>
        <Form.Control type="email"  name='Rollno' value={mydata.Rollno} onChange={handleform}
        placeholder="Enter your Rollno" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b> Name </b></Form.Label>
        <Form.Control type="email" name='Name' value={mydata.Name} onChange={handleform}
        placeholder="Enter your Name" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b> City </b></Form.Label>
        <Form.Control type="email" name='City' value={mydata.City} onChange={handleform}
        placeholder="Enter your City" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b> Fess </b></Form.Label>
        <Form.Control type="email" name='Fess' value={mydata.Fess} onChange={handleform}
        placeholder="Enter your Fess" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Button variant="success" onClick={handlesubmit} style={{margin:"25px 0px 30px 200px "}}>Submit</Button>{' '}
      </Form>
        </>
    )
}

export default Editdata;