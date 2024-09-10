import { userContext } from "../App";
import { useContext } from "react";

const Comp5=()=>{
    const {name}=useContext(userContext);
    return(
        <>
        <h1>welocme to cybrom 5 {name}</h1>
        </>
    )
}

export default Comp5;