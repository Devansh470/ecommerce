
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills=()=>{
    return(
        <>
        <Container fluid style={{backgroundColor:"white", paddingTop:"40px"}}>
      <Row>
        <Col><div>
            <div style={{color:"rgb(18, 97, 106)", fontSize:"45px", textAlign:"center", paddingTop:"70px", paddingBottom:"20px" , marginTop:"-60px"}}> <b> Skills</b></div>
            <div style={{textAlign:"center", fontSize:"30px", marginTop:"-10px", marginBottom:"10px"}}>Skills as Strong as Steel</div>
            <div style={{textAlign:"center", width:"600px", marginLeft:"430px",}}>Proficient in HTML,  <b> , a </b>nd JavaScript for responsive design. Skilled in UI/UX
principles, wireframing, and prototyping tools. Experienced in Adobe
Creative Suite. Strong eye for detail and user-centered design.
</div>
            </div>
        </Col>
      </Row>
    </Container>

    <Container fluid style={{backgroundColor:"white", paddingBottom:"50px", paddingTop:"80px", paddingLeft:"190px"}}>
      <Row >
        <Col >
        <div style={{backgroundColor:"rgb(225, 225, 225)", border:"2px solid rgb(225, 225, 225)", marginLeft:"-120px", marginRight:"40px", paddingTop:"40px", paddingBottom:"20px", borderRadius:"40px"}}>

        <Container style={{marginLeft:"120px"}} >
      <Row style={{marginBottom:"40px"}}>
        <Col><div>
            <div style={{fontSize:"30px", marginBottom:"8px", color:"rgb(18, 97, 106)"}}> <b> REACT</b></div>
            <div><ProgressBar striped variant="success" now={85}  style={{width:"400px", border:"2px solid rgb(18, 97, 106)"}}/></div>
            </div>
        </Col>
        <Col><div>
            <div style={{fontSize:"30px", marginBottom:"8px", color:"rgb(18, 97, 106)"}}> <b> C++</b></div>
            <div><ProgressBar striped variant="warning" now={70}  style={{width:"400px", border:"2px solid rgb(18, 97, 106)"}}/></div>
            </div>
        </Col>
      </Row>
      <Row style={{marginBottom:"40px"}}>
        <Col><div>
            <div style={{fontSize:"30px", marginBottom:"8px", color:"rgb(18, 97, 106)"}}> <b> JAVA </b></div>
            <div><ProgressBar striped variant="success" now={92}  style={{width:"400px", border:"2px solid rgb(18, 97, 106)"}}/></div>
            </div>
        </Col>
        <Col><div>
            <div style={{fontSize:"30px", marginBottom:"8px", color:"rgb(18, 97, 106)"}}> <b> CSS </b></div>
            <div><ProgressBar striped variant="success" now={85}  style={{width:"400px", border:"2px solid rgb(18, 97, 106)"}}/></div>
            </div>
        </Col>
      </Row>
      <Row style={{marginBottom:"40px"}}>
        <Col><div>
            <div style={{fontSize:"30px", marginBottom:"8px", color:"rgb(18, 97, 106)"}}> <b> JAVA SCRIPT</b></div>
            <div><ProgressBar striped variant="danger" now={80}  style={{width:"400px", border:"2px solid rgb(18, 97, 106)"}}/></div>
            </div>
        </Col>
        <Col><div>
            <div style={{fontSize:"30px", marginBottom:"8px", color:"rgb(18, 97, 106)"}}> <b> C LANGUAGE</b></div>
            <div><ProgressBar striped variant="info" now={60}  style={{width:"400px", border:"2px solid rgb(18, 97, 106)"}}/></div>
            </div>
        </Col>
      </Row>
    </Container>
            </div>
        </Col>
      </Row>
    </Container>
        </>
    )
}

export default Skills;