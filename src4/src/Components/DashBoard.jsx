import { message } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard=()=>{

    const [uemail, setUemail]=useState("");
    const [uname, setUname]=useState("");

    const mynav= useNavigate();
   
  

    useEffect(()=>{
        const name=localStorage.getItem("username");
        const email=localStorage.getItem("useremail");
        setUemail(email);
        setUname(name);
        if (!email)
            {
                mynav("/");
            }
    }, [])

  
       
       



   const logout=()=>{
       localStorage.clear();
       mynav("/")
       message.error("Your are Succesfully Loged Out")
   }

    return(
        <>
           <h3> Welcome : {uname} </h3>
           <h4> Email : {uemail} </h4>
           <button onClick={logout}> Logout </button>
          <hr size="3" color="navy"/>
        </>
    )
}
export default DashBoard;