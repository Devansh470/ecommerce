import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const [mydata,setmydata]=useState([]);

    const myNav= useNavigate();

    const loaddata=()=>{
        let url="http://localhost:3000/dtat";
        axios.get(url).then((res)=>{
            console.log(res.data)
            setmydata(res.data)
        })
    }
    useEffect(()=>{
        loaddata();
    },[])

    const mydel=(myid)=>{
        let url=`http://localhost:3000/dtat/${myid}`
        axios.delete(url).then((res)=>{
            alert("record deleted")
            loaddata();
        })
    }
    const myedit=(myid)=>{
        myNav(`/myedit/${myid}`)
    }
   
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.Rollno}</td>
                <td>{key.Name}</td>
                <td>{key.City}</td>
                <td>{key.Fess}</td>
                <td ><a href=""><img onClick={()=>{myedit(key.id)}} src="./image/editimage.png" alt="" style={{width:"50px"}}/></a></td> 
                <td><a href=""><img onClick={()=>{mydel(key.id)}} src="./image/deletimage.png" alt="" style={{width:"50px"}}/></a></td> 
                 
            </tr>
            
            </>
        )
    })
    return(
        <>
        <h1 style={{margin:"10px 0px 0px 600px "}}> <b> UPDATE PAGE </b></h1>
        <Table striped bordered hover style={{width:"1400px", margin:"50px 0px 50px 14px", border:"2px solid blue",boxShadow:"0px 0px 10px black"}}>
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fess</th>
          <th>Edit</th>
          <th>Delet</th>
         
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
    </Table>
        </>
    )
}

export default Update;