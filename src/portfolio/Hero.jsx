
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero=()=>{
    return(
        <>
         <Container >
      <Row>
        <Col className='herodiv1'><div style={{margin:"250px 0px 0px 100px"}}>
            <div style={{fontSize:'60px', margin:'0px 0px -50px 0px', color:"yellow"}}>Hey, I'm </div><br /> 
            <span style={{fontSize:'100px', color:"white"}}> <b> Devansh </b> </span><br />
            <div style={{fontSize:'100px', margin:'-50px 0px 0px 0px' , color:"white"}}> <b> Garg </b></div> 
            <div style={{color:"white", fontSize:'20px'}}>web designer & Full Stack Developer</div>
            </div>
            </Col>
        <Col className='img1'><div></div></Col>
      </Row>
    </Container>
        </>
    )
}

export default Hero;