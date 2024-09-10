
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { TfiInkPen } from "react-icons/tfi";
import { FaCode } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { IoLogoReact } from "react-icons/io5";


const Services=()=>{
    return(
        <>
        <Container fluid style={{backgroundColor:"white"}}>
      <Row>
        <Col><div>
            <div style={{color:"rgb(18, 97, 106)", fontSize:"45px", textAlign:"center", paddingTop:"70px", paddingBottom:"20px" , marginTop:"-60px"}}> <b> Services</b></div>
            <div style={{textAlign:"center", fontSize:"30px", marginTop:"-10px", marginBottom:"10px"}}>What I Am Great At</div>
            <div style={{textAlign:"center", width:"500px", marginLeft:"470px"}}>I excel in coding, problem-solving, and architecting robust solutions.
My strengths lie in debugging, optimizing performance,
and collaborating effectively within agile teams</div>
            </div>
        </Col>
      </Row>
    </Container>


    <Container fluid style={{backgroundColor:"white", paddingBottom:"50px"}}>
      <Row style={{marginLeft:"70px", paddingTop:"50px"}}>

        <Col >
        <Figure style={{backgroundColor:"rgb(225, 225, 225)", padding:"50px"}}>
        <FaCode className='servimg'/> 
        <div style={{textAlign:"center", paddingTop:"10px", color:"red"}}>Web Development</div>
        <div style={{textAlign:"center"}}> <b> Best Web Developer</b> </div>
    </Figure>
    <Figure.Caption style={{textAlign:"center", color:"rgb(18, 97, 106)", fontSize:"20px", marginLeft:"-70px"}}>
      <b>" Building Web Wonders,<br /> From Scratch "</b>
      </Figure.Caption>

    </Col>

        <Col>

        <Figure style={{backgroundColor:"rgb(225, 225, 225)", padding:"50px"}}>
        <TfiInkPen className='servimg'/>
        <div style={{textAlign:"center", paddingTop:"10px", color:"red"}}>Ui/Ux design</div>
        <div style={{textAlign:"center"}}> <b> best UI/UX design</b></div>
    </Figure>
    <Figure.Caption style={{textAlign:"center", color:"rgb(18, 97, 106)", fontSize:"20px", marginLeft:"-70px"}}>
     <b>  Innovative Designs <br />for Modern Users </b>
      </Figure.Caption>

    </Col>

        <Col >

        <Figure style={{backgroundColor:"rgb(225, 225, 225)", padding:"50px"}}>
        <BsGlobe className='servimg'/>
        <div style={{textAlign:"center", paddingTop:"10px", color:"red"}}>Web Research</div>
        <div style={{textAlign:"center"}}> <b> Best Web Research</b></div>
    </Figure>
    <Figure.Caption style={{textAlign:"center", color:"rgb(18, 97, 106)", fontSize:"20px", marginLeft:"-70px"}}>
     <b>Navigating Data, <br /> Discovering Opportunities</b>
      </Figure.Caption>

    </Col>

        <Col>

        <Figure style={{backgroundColor:"rgb(225, 225, 225)", padding:"50px"}}>
        <IoLogoReact className='servimg'/>
        <div style={{textAlign:"center", paddingTop:"10px", color:"red"}}>react Developer</div>
        <div style={{textAlign:"center"}}> <b> Best React Developer</b></div>
    </Figure>
    <Figure.Caption style={{textAlign:"center", color:"rgb(18, 97, 106)", fontSize:"20px", marginLeft:"-70px"}}>
     <b> Crafting Engaging <br />Interfaces with React</b>
      </Figure.Caption>

    </Col>

      </Row>
    </Container>

        </>
    )
}

export default Services;