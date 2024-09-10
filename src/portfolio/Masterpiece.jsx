import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'antd';
import React from 'react';




const Masterpiece=()=>{
    const contentStyle= {
        height: '570px',
        backgroundColor:"rgb(18, 97, 106)"
      };

    return(
        <>
        <Container fluid style={{backgroundColor:"rgb(238, 238, 238)", paddingBottom:"80px"}}>
      <Row>
        <Col><div>
            <div style={{color:"rgb(18, 97, 106)", fontSize:"45px", textAlign:"center", paddingTop:"70px", paddingBottom:"20px" , marginTop:"-60px"}}> <b> Portfolio</b></div>
            <div style={{textAlign:"center", fontSize:"30px", marginTop:"-10px", marginBottom:"10px"}}>MY Masterpiece collection</div>
            <div style={{textAlign:"center", width:"550px", marginLeft:"450px"}}>Discover our pinnacle in website design mastery. With a fusion of creativity and
functionality, we create captivating digital experiences. Explore our
showcase for innovation and user-centric brilliance."s</div>
            </div>
        </Col>
      </Row>
    </Container>

    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src="/image/cor1.png" alt="" className='corimg'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="/image/cor2.png" alt="" className='corimg'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="/image/cor3.png" alt="" className='corimg'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="/image/cor4.png" alt="" className='corimg'/></h3>
    </div>
  </Carousel>

   

        </>
    )
}

export default Masterpiece;