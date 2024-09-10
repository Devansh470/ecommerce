import { createContext, useState } from "react";

const usercontext=createContext();

const Logincontext=({children})=>{
    const [user,setuser]=useState({name:"",auth:false})

    const userlogin=(nm)=>{
        setuser({name:nm, auth:true})
    }
    const userlogout=()=>{
        setuser({name:"",auth:false})
    }
    return(
        <>
        <usercontext.Provider value={{user, userlogin, userlogout}}>
            {children}
        </usercontext.Provider>
        </>
    )
}

export default Logincontext;
export {usercontext};