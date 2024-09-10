import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Aboutme=()=>{
    return(
        <>
        <Container fluid style={{backgroundColor:"rgb(238, 238, 238)"}}>
      <Row>
        <Col> <div>
        <div style={{color:"rgb(18, 97, 106)", fontSize:"45px", textAlign:"center", paddingTop:"70px", paddingBottom:"20px"}}> <b> About Me </b> </div>
        <div style={{textAlign:"center", width:"1000px", marginLeft:"220px", fontSize:"18px", color:"rgb(143, 139, 139);"}}>As a web developer and full stack developer, I possess a versatile skill set that spans both front-end and back-end development. Proficient in HTML, CSS, JavaScript, and various frameworks like React and Angular, I create responsive and user-friendly interfaces. My back-end expertise includes working with databases, server-side languages such as Node.js and <br /> <br /> Python, and managing APIs. I excel in integrating diverse technologies to build seamless web applications, ensuring functionality, performance, and security. My strong problem-solving abilities and collaborative mindset enable me to deliver robust and innovative solutions, enhancing user experiences and meeting complex project requirements.</div>
        <div style={{marginTop:"60px", paddingBottom:"100px", textAlign:"center"}}><Button variant="warning" >View Full Resume</Button>{' '}</div>
        </div></Col>
      </Row>
    </Container>
   
        </>
    )
}

export default Aboutme; 