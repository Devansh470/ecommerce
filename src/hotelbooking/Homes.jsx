import { useNavigate } from "react-router-dom";

const Homes=()=>{
  const mynav=useNavigate();
  const acrom=()=>{
    mynav('/acroom')
  }
  const nonacrom=()=>{
    mynav('/nonacroom')
  }

    return(
        <>
        <div style={{display:"flex", margin:"200px", justifyContent:"space-evenly"}}>
        <div >
        <a href=""><img src="./image/acroom.jpeg" alt="" style={{width:"500px"}} onClick={()=>{acrom()}}/></a>
        <a href="" style={{textDecoration:"none", color:"black", textAlign:"center"}}> <h1 onClick={()=>{acrom()}}>AC ROOM</h1></a>
        </div>
        <div><a href=""><img src="./image/nonacroom.jpg" alt="" style={{width:"550px", height:"333px"}} onClick={()=>{nonacrom()}}/></a>
        <a href="" style={{textDecoration:"none", color:"black", textAlign:"center"}}> <h1 onClick={()=>{nonacrom()}}>NON AC ROOM</h1></a>
        
        </div>
        </div>
        </>
    )
}

export default Homes;