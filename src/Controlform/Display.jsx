import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';


const Display=()=>{

    const [mydata,setdata]=useState([]);
    const loaddata=()=>{
        let api="http://localhost:3000/dtat";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setdata(res.data)
        })
    }
    useEffect(()=>{
        loaddata();
    },[])

    let ans=mydata.map((key)=>{
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
        <h1 style={{margin:"10px 0px 0px 600px "}}> <b> DISPLAY PAGE </b></h1>
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

export default Display;