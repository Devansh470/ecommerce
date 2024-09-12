import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorchange } from "./slise";

const Theme=()=>{
    const ans=useSelector(state=>state.counter.color)
    const dispatch=useDispatch()
    const [color, setcolor]=useState("")
    return(
        <>
        <input type="text" onChange={(e)=>setcolor(e.target.value)}/>
        <button onClick={()=>dispatch(colorchange(color))}> Change Color </button>  
        <div style={{width:"450px" , height:"450px" , margin:"30px" , backgroundColor:ans}}/>

        
        </>
    )
}

export default Theme;