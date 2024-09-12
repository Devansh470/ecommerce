import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask } from "./slice";

const Practicetodo=()=>{
    const mydata=useSelector(state=>state.list.todo);
    console.log(mydata)
    const dispatch=useDispatch()
    const [text, settext]=useState("")

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.data}</td>

            </tr>
            </>
        )

    })
    return(
        <>
        <h1>TODO LIST</h1>
        <input type="text" onChange={(e)=>{settext(e.target.value)}}/>
        <button onClick={()=>{dispatch(addtask(text))}}>add</button>
       {ans}
        
        </>
    )
}

export default Practicetodo;