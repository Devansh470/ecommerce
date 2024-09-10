import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog=()=>{
    return(
        <>
        <div style={{backgroundColor:"rgb(238, 238, 238)", paddingTop:"40px", marginTop:"-10px"}}>
        <div style={{color:"rgb(18, 97, 106)", fontSize:"45px", textAlign:"center", paddingTop:"70px", paddingBottom:"20px" , marginTop:"-60px"}}> <b> My Blogs</b></div>
        <Container>

      <Row style={{paddingBottom:"40px", paddingTop:"40px", paddingLeft:"100px"}}>
        <Col> 

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/image/blog1.jpg" />
      <Card.Body>
        <Card.Title>how to own your audience by
        creating an email list</Card.Title>
        <Card.Text>
        I excel in coding, problem-solving,
and architecting robust solutions. My
strengths lie in debugging, optimiz-
-ing performance, and collaborating
effectively within agile teams
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </Col>


        <Col> 

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/image/blog2.jpg" />
      <Card.Body>
        <Card.Title>top 10 toolkits for deep learning in
        2024</Card.Title>
        <Card.Text>
        I excel in coding, problem-solving,
and architecting robust solutions. My
strengths lie in debugging, optimiz-
-ing performance, and collaborating
effectively within agile teams
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </Col>


        <Col>

         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/image/blog3.jpg" style={{height:"167px"}}/>
      <Card.Body>
        <Card.Title>Everything you need to know about
        web accessibility</Card.Title>
        <Card.Text>
        I excel in coding, problem-solving,
and architecting robust solutions. My
strengths lie in debugging, optimiz-
-ing performance, and collaborating
effectively within agile teams
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </Col>
      </Row>
      <Row style={{paddingLeft:"100px", paddingBottom:"40px"}}>


        <Col>

         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/image/blog4.jpg" />
      <Card.Body>
        <Card.Title>how to inject humor & comedy
        into your brand</Card.Title>
        <Card.Text>
        I excel in coding, problem-solving,
and architecting robust solutions. My
strengths lie in debugging, optimiz-
-ing performance, and collaborating
effectively within agile teams
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </Col>


        <Col>

         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/image/blog5.jpg" />
      <Card.Body>
        <Card.Title>women in web design:
        how to achive success</Card.Title>
        <Card.Text>
        I excel in coding, problem-solving,
and architecting robust solutions. My
strengths lie in debugging, optimiz-
-ing performance, and collaborating
effectively within agile teams
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </Col>

        <Col>

         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/image/blog6.jpg" style={{height:"210px"}}/>
      <Card.Body>
        <Card.Title>evergreen versus topical content:
        An overview</Card.Title>
        <Card.Text>
        I excel in coding, problem-solving,
and architecting robust solutions. My
strengths lie in debugging, optimiz-
-ing performance, and collaborating
effectively within agile teams
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </Col>


      </Row>
    </Container>
        </div>
        </>
    )
}

export default Blog;