import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Deshboard=()=>{
    const [uname,setname]=useState("")
const [uemail, setemail]=useState("")
const mynave=useNavigate()

useEffect(()=>{

   const newname=localStorage.getItem("putname")
   const newemail=localStorage.getItem("putemail")
   setname(newname)
   setemail(newemail)
   if(!newname)
   {
    mynave("/")
   }
},[])

const handlelogout=()=>{
    localStorage.clear();
    mynave("/")
    alert("you are successfully logout")

}
    return(
        <>
        <h1>welcome user: {uname}</h1>
        <h1>your email is:{uemail}</h1><br /><br />
        <button onClick={handlelogout}>LOGOUT</button>
        </>
    )
}
export default Deshboard;