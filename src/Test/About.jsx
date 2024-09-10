import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const About=()=>{
const[display, setdisplay]=useState([]);
const loaddata=()=>{
    let url="http://localhost:3000/form";
    axios.get(url).then((res)=>{
        console.log(res.data);
        setdisplay(res.data);
    })
}
useEffect(()=>{
    loaddata()
})
const ans=display.map((key)=>{
    return(
        <>
            <tr>
                <td>{key.empid}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.department}</td>
                <td>{key.basicsalary}</td>
            </tr>
        </>
    )
})

    return(
        <>
        <h1>About page</h1>
        <Table striped bordered hover style={{width:"1400px", margin:"50px 0px 50px 22px", border:"2px solid blue"}}>
      <thead>
        <tr>
          <th>empid</th>
          <th>Name</th>
          <th>designation</th>
          <th>department</th>
          <th>basicsalary</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
    </Table>

        </>
    )
}

export default About;