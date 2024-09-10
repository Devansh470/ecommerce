import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const Nonacroom=()=>{
    const mynav=useNavigate()
    const single=()=>{
        mynav('/book4')
    }
    const double=()=>{
        mynav('/book5')
    }
    const twin=()=>{
        mynav('/book6')
    }
    return(
        <>
        <h1 style={{margin:"50px 0px 0px 600px"}}> <b> NON AC ROOMS</b></h1>
        <div style={{display:"flex", justifyContent:"space-evenly", margin:"80px 0px 0px 0px"}}>
            <div>
            <a href=""><img src="./image/singlenonacroom.jpg" alt="" style={{width:"450px"}} /></a>
            <a href="" style={{textDecoration:"none", color:"black", textAlign:"center"}}> <h3 >SINGLE NON AC ROOM </h3></a>
            <h2 style={{margin:"-10px 0px 0px 96px", color:"black"}}>PER NIGHT- <span style={{color:"red"}}> 10599</span></h2>
            <Button variant="success" style={{margin:"0px 0px 0px 195px"}} onClick={()=>{single()}}>BOOK</Button>{' '}
            </div>
            <div>
            <a href=""><img src="./image/nonacroom1.jpg" alt="" style={{width:"460px", height:"295px"}} /></a>
            <a href="" style={{textDecoration:"none", color:"black", textAlign:"center"}}> <h3 >STANDARD DOUBLE NON AC ROOM </h3></a>
            <h2 style={{margin:"-10px 0px 0px 110px", color:"black"}}>PER NIGHT- <span style={{color:"red"}}> 6599</span></h2>
            <Button variant="success" style={{margin:"0px 0px 0px 210px"}} onClick={()=>{double()}}>BOOK</Button>{' '}
            </div>
            <div>
            <a href=""><img src="./image/nonacroom2.jpg" alt="" style={{width:"460px",height:"295px"}} /></a>
            <a href="" style={{textDecoration:"none", color:"black", textAlign:"center"}}> <h3 >STANDARD TWIN NON AC ROOM </h3></a>
            <h2 style={{margin:"-10px 0px 0px 98px", color:"black"}}>PER NIGHT- <span style={{color:"red"}}> 2599</span></h2>
            <Button variant="success" style={{margin:"0px 0px 0px 200px"}} onClick={()=>{twin()}}>BOOK</Button>{' '}
            </div>
        </div>
        </>
    )
}

export default Nonacroom;