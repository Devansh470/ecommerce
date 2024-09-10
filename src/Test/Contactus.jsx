
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Contactus=()=>{

  const [rollno, setroolno]=useState("")
  const [name, setname]=useState("")
  const [phy, setphy]=useState("")
  const [che, setche]=useState("")
  const [eng, seteng]=useState("")
  const [math, setmath]=useState("")
  const [hindi, sethindi]=useState("")

  const [total, settotal]=useState(0)
  const [percentage, setpercentage]=useState(0)
  const [division, setDivision]=useState("")

  const handlesubmit=()=>{

    const tot=Number(phy) + Number(che) + Number(eng) + Number(math) + Number(hindi)
    const perc=tot/500*100
    settotal(tot)   
    setpercentage(perc) 
    let prcent
    if(percentage>=60 && percentage<=100)
          {
            prcent="First Division"
          }
        else if(percentage>=45 && percentage<=60)
          {
            prcent="Second Division"
          }
         else if(percentage>=33 && percentage<=45)
            {
              prcent="Third Division"
            }
         else if(percentage<33)
            {
              prcent="fail"
            }
          setDivision(prcent)
  }
  
  return(
    <>
    <Form style={{width:"500px", margin:"40px 0px 40px 500px",border:"4px solid gold", borderRadius:"20px"}}>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b>Enter Rollno </b></Form.Label>
        <Form.Control type="number"  name='Rollno' value={rollno} onChange={(e)=>{setroolno(e.target.value)}}
        placeholder="Enter your Rollno" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b>Enter Name </b></Form.Label>
        <Form.Control type="text" name='Name' value={name}  onChange={(e)=>{setname(e.target.value)}}
        placeholder="Enter your Name" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b>Enter Phy Marks</b></Form.Label>
        <Form.Control type="number" name='Phy' value={phy} onChange={(e)=>{setphy(e.target.value)}}
        placeholder="Enter Phy Marks" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b>Enter Che Marks</b></Form.Label>
        <Form.Control type="number" name='Che' value={che} onChange={(e)=>{setche(e.target.value)}}
        placeholder="Enter Che Marks" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b>Enter Math Marks</b></Form.Label>
        <Form.Control type="number" name='Math' value={math} onChange={(e)=>{setmath(e.target.value)}}
        placeholder="Enter Math Marks" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b>Enter Eng Marks</b></Form.Label>
        <Form.Control type="number" name='Eng' value={eng} onChange={(e)=>{seteng(e.target.value)}}
        placeholder="Enter Eng Marks" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" style={{margin:"20px"}}>
        <Form.Label> <b>Enter Hindi Marks</b></Form.Label>
        <Form.Control type="number" name='Hindi' value={hindi} onChange={(e)=>{sethindi(e.target.value)}}
        placeholder="Enter Hindi Marks" style={{color:"red", border:"2px solid blue"}}/>
      </Form.Group>
      <Button variant="success" onClick={handlesubmit} style={{margin:"25px 0px 30px 200px "}}>Submit</Button>{' '} <br />

      <div style={{margin:"50px", fontSize:"30px"}}><b>TOTAL MARKS={total}</b></div>
      <div style={{margin:"-40PX 0PX 0PX 50PX", fontSize:"30px"}}><b>PERCENTAGE={percentage}%</b></div>
      <div style={{margin:"10PX 0PX 0PX 50PX", fontSize:"30px"}}><b>Division={division}</b></div>

    </Form>

    </>
  )
}

export default Contactus;