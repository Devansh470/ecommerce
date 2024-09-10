import { useState } from "react";

const Services=()=>{
const[count,setcount]=useState(0)

    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+15)}}>increment</button>
        <button onClick={()=>{setcount(count-15)}}>decrement</button>


        </>
    )
}

export default Services;