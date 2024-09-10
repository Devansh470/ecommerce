import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";


const Display=()=>{
    const mynav=useNavigate();
    const payment=(myid)=>{
        mynav(`/checkout/${myid}`)
    }
    const [mydata,setdata]=useState([]);
    const loaddata=()=>{
        let api="http://localhost:3000/data";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setdata(res.data)
        })
    }
    useEffect(()=>{
        loaddata();
    },[])

    const mydel=(myid)=>{
        let url=`http://localhost:3000/data/${myid}`
        axios.delete(url).then((res)=>{
            alert("record deleted")
            loaddata();
        })
    }

    let ans=mydata.map((key)=>{
        let total=(key.day * key.night)
        return(
            <>
            <tr>
                <td>{key.day}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.night}</td>
                <td>{key.room}</td>
                <td>{total}</td>
                <td><button onClick={()=>{mydel(key.id)}}>Delete</button></td>
                <td><button onClick={()=>{payment(key.id)}}>Payment</button></td>
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
          <th>No Of Days</th>
          <th>Name</th>
          <th>City</th>
          <th>Charge Per Night</th>
          <th>Room Type</th>
          <th>Total Amount To Pay</th>
          <th>Delet</th>
          <th>Payment</th>
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