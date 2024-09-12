import { useDispatch, useSelector } from "react-redux";
import { deccounter, inccounter } from "./slise";

const Counter=()=>{
    const data=useSelector(state=>state.counter.count)
    const dispatch=useDispatch()
    return(
        <>
        <button onClick={()=>{dispatch(inccounter())}}>inc</button>
        <div>{data}</div>
        <button onClick={()=>{dispatch(deccounter())}}>dec</button>
        
        </>
    )
}

export default Counter;