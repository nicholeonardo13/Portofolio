import "./Gallery.css";
import ooveo from "../../img/ooveo-gallery.jpg";
import kongbu from "../../img/bank-gallery.jpg";
import ships from "../../img/ship-gallery.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";

const Gallery = (props) => {
  return (
    <div id='projects' className='projects'>
      <Container>
        <Row className='text-center'>
          <Col className='mb-4'>
            <h2>My Projects</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4} className='mb-3'>
            <Card className='mb-3'>
              <Card.Img variant='top' src={ooveo} />
              <Card.Body>
                <Card.Title>OOVEO Salon</Card.Title>
                <Card.Text>
                  OOVEO is an application that provides men's and women's
                  haircuts and other services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='mb-3'>
              <Card.Img variant='top' src={ships} />
              <Card.Body>
                <Card.Title>The Ships</Card.Title>
                <Card.Text>React.js with with Graphql and Tesla API.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mb-3'>
            <Card>
              <Card.Img variant='top' src={kongbu} />
              <Card.Body>
                <Card.Title>Kong Bu Bank</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Gallery;
