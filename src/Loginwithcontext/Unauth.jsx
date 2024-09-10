import { useContext, useState } from "react";
import { usercontext } from "./Logincontext";


const Unauth=()=>{
    const {userlogin}=useContext(usercontext);
    const [nmval,setnmval]=useState("")
    return(
        <>
        <h1>login form</h1>
        Enter name: <input type="text" value={nmval} onChange={(e)=>{setnmval(e.target.value)}}/>
        <button onClick={()=>{userlogin(nmval)}}>login</button>
        </>
    )
}
export default Unauth;