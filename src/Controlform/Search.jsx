import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from 'axios';
const Search=()=>{

    const[mysearch, setsearch]=useState("")
    const[mydata,setmydata]=useState([])
    const mydatasearch=()=>{
        let url=`http://localhost:3000/dtat/?Rollno=${mysearch}`;
        axios.get(url).then((res)=>{
            setmydata(res.data);
        })
    }

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.Rollno}</td>
                <td>{key.Name}</td>
                <td>{key.City}</td>
                <td>{key.Fess}</td>
            </tr>
            </>
        )
    })
    return(
        <>
       <h1 style={{margin:"10px 0px 0px 600px "}}> <b> SEARCH PAGE </b></h1>
       <Form style={{width:"500px", margin:"40px 0px 40px 500px",border:"4px solid red", borderRadius:"20px"}}>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b> Search </b></Form.Label>
        <Form.Control type="text"  name='Rollno' value={mysearch} onChange={(e)=>{setsearch(e.target.value)}}
        placeholder="Enter the Rollno which you want to search" style={{color:"blue", border:"2px solid blue"}}/>
      </Form.Group>
      <Button variant="success" onClick={mydatasearch}  style={{margin:"25px 0px 30px 200px "}}>Submit</Button>{' '}
      </Form>
      <Table striped bordered hover style={{width:"1400px", margin:"50px 0px 50px 22px", border:"2px solid blue",boxShadow:"0px 0px 10px black"}}>
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fess</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
    </Table>
      

        </>
    )
}

export default Search;