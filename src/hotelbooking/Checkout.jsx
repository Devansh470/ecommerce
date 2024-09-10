import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Checkout=()=>{

    const mynav=useNavigate();
    const qrcode=()=>{
        mynav("/qrcode")
    }
    const {id}=useParams(); 
    const [mydata,setdata]=useState([]);
    const loaddata=()=>{
        let api=`http://localhost:3000/data/?id=${id}`;
        axios.get(api).then((res)=>{
            console.log(res.data);
            setdata(res.data)
        })
    }
    useEffect(()=>{
        loaddata();
    },[])
    let day=mydata.map((f)=>{return f.day})
    let night=mydata.map((f)=>{return f.night})
    let sum=(day*night)

    let ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.day}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.night}</td>
                <td>{key.room}</td>
                <td>{sum}</td>
            </tr>
            

            </>
            
        )
    })

    return(
        <>
        <h1 style={{margin:"10px 0px 0px 600px "}}> <b> PAYMENT PAGE </b></h1>
        <Table striped bordered hover style={{width:"1400px", margin:"50px 0px 50px 22px", border:"2px solid blue",boxShadow:"0px 0px 10px black"}}>
      <thead>
        <tr>
          <th>No Of Days</th>
          <th>Name</th>
          <th>City</th>
          <th>Charge Per Night</th>
          <th>Room Type</th>
          <th>Total Amount To Pay</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
    </Table>
    <div style={{width:"150px",padding:"0px 0px 0px 18px", margin:"150px 0px 0px 640px"}}>
        <Button variant="success" style={{ boxShadow:"0px 0px 10px black", borderRadius:"10px", fontSize:"30px", width:"180px", color:"lightyellow"}} onClick={()=>{qrcode()}}> <b> PAY-{sum}</b></Button>{' '}
    </div>
    
        </>
    )
   
}

export default Checkout;