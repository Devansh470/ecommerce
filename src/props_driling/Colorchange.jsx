import { useContext, useState } from "react";
import { colorcontext } from "../App";

const Colorchange=()=>{
    const {color,setcolor}=useContext(colorcontext);
    const [val, setval]=useState("")
    return(
        <>
        <h1>welcome to cybrom</h1>
        type your color here <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}}/>
        <button onClick={()=>{setcolor(val)}}>click here</button>
        <div style={{width:"200px", height:"200px", backgroundColor:color}}></div>
        </>
    )
}

export default Colorchange;