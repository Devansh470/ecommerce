import { useContext } from "react";
import { usercontext } from "./Logincontext";

const Auth=()=>{
    const {user, userlogout}=useContext(usercontext);
    return(
        <>
        <h1>welcome: {user.name}</h1>
        <button onClick={()=>{userlogout()}}>logout</button>
        </>
    )
}
export default Auth;