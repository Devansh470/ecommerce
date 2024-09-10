import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
const Acroom=()=>{
    const mynav=useNavigate()
    const single=()=>{
        mynav('/book1')
    }
    const double=()=>{
        mynav('/book2')
    }
    const twin=()=>{
        mynav('/book3')
    }
    return(
        <>
        <h1 style={{margin:"50px 0px 0px 650px"}}> <b> AC ROOMS</b></h1>
        <div style={{display:"flex", justifyContent:"space-evenly", margin:"110px 0px 0px 0px"}}>
            <div>
            <a href=""><img src="./image/singleroom.jpg" alt="" style={{width:"400px"}} /></a>
            <a href="" style={{textDecoration:"none", color:"black", textAlign:"center"}}> <h3 >SINGLE AC ROOM </h3></a>
            <h2 style={{margin:"-10px 0px 0px 72px", color:"black"}}>PER NIGHT- <span style={{color:"red"}}> 16599</span></h2>
            <Button variant="success" style={{margin:"0px 0px 0px 170px"}} onClick={()=>{single()}}>BOOK</Button>{' '}
            </div>
            <div>
            <a href=""><img src="./image/standarddoubleroom.jpg" alt="" style={{width:"400px", height:"268px"}}/></a>
            <a href="" style={{textDecoration:"none", color:"black", textAlign:"center"}}> <h3>STANDARD DOUBLE AC ROOM </h3></a>
            <h2 style={{margin:"-10px 0px 0px 70px", color:"black"}}>PER NIGHT- <span style={{color:"red"}}> 12799</span></h2>
            <Button variant="success" style={{margin:"0px 0px 0px 170px"}} onClick={()=>{double()}}>BOOK</Button>{' '}
            </div>
            <div>
            <a href=""><img src="./image/standardtwinroom.jpg" alt="" style={{width:"400px"}}/></a>
            <a href="" style={{textDecoration:"none", color:"black", textAlign:"center"}}> <h3>STANDARD TWIN AC ROOM </h3></a>
            <h2 style={{margin:"-10px 0px 0px 60px", color:"black"}}>PER NIGHT- <span style={{color:"red"}}> 8599</span></h2>
            <Button variant="success" style={{margin:"0px 0px 0px 170px"}} onClick={()=>{twin()}}>BOOK</Button>{' '}     
            </div>
        </div>
        </>
    )
}

export default Acroom;