
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaAddressCard } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Contact=()=>{
    return(
        <>
         <Container fluid style={{backgroundColor:"white"}}>
      <Row>
        <Col style={{marginLeft:"-12px"}}><img src="image/img2.jpg" alt="" />
        </Col>

        <Col style={{backgroundColor:"rgb(18, 97, 106)", marginLeft:"-12px", marginRight:"-12px"}}> <div>
            <div style={{color:"gold", fontSize:"80px", margin:"50px 0px 0px 70px"}}> <b> Contact</b></div>
            <div style={{width:"400px", color:"white", padding:"10px 0px 0px 70px"}}>Connect with us for support, inquiries,
or collaboration opportunities. Reach out
today to start a conversation and discover how
we can work together effectively. Let's get in touch!</div>
<div style={{fontSize:"50px", color:"white", padding:"30px 0px 0px 70px", display:"flex"}}><FaAddressCard/> <div style={{fontSize:"20px", color:"white", margin:"-5px 0px 0px 10px"}}>ADDRESS POINT <br /> J470 KOTRA SULTANABAD BHOPAL</div></div>
<div style={{fontSize:"50px", color:"white", padding:"20px 0px 0px 70px",display:"flex"}}><FaMailBulk /><div style={{fontSize:"20px", color:"white", margin:"-5px 0px 0px 10px"}}>MAIL ME <br /> devanshgarg630@gmail.com</div></div>
<div style={{fontSize:"50px", color:"white", padding:"30px 0px 0px 70px",display:"flex"}}><FaPhoneVolume /><div style={{fontSize:"20px", color:"white", margin:"-5px 0px 0px 10px"}}>CALL ME <br /> 8253012047</div></div>
            </div><br /><br /><br />
            <div>
                 <div style={{display:"flex"}}>
                     <Form.Control type="text" placeholder="Enter Name" style={{width:"300px",height:"40px", marginRight:"30px", marginLeft:"15px"}}/>
                     <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Enter Email" style={{width:"300px"}}/>
                            </Form.Group>
                    </Form>
                </div>
                <div><Form.Control type="text" placeholder="Your Subject" style={{width:"630px", margin:"40px 0px 0px 15px"}}/></div>
                <div>
                    <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder='Your Message' rows={3} style={{width:"630px", margin:"50px 0px 0px 15px", height:"100px"}}/>
                            </Form.Group>
                        </Form>     
                </div>
                <div>
                <Button variant="outline-warning" style={{margin:"20px 0px 0px 290px", width:"110px", fontSize:"20px", backgroundColor:"white", color:"black"}}> <b> Submit</b> </Button>{' '}
                </div>
            
            </div>
        </Col>
            
      </Row>
    </Container>


        </>
    )
}

export default Contact;