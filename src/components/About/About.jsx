import { Col, Container, Row } from "react-bootstrap";

const About = (props) => {
  return (
    <div className='pt-5'>
      <Container>
        <Row className='text-center'>
          <Col className='mb-4'>
            <h2>About Me</h2>
          </Col>
          <Row className='justify-content-center fs-6 text-center'>
            <Col md={4}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid maiores eligendi provident soluta dolor optio iusto eius
                voluptatibus voluptate aut ipsum dolores accusamus velit porro,
                atque fugit non deserunt quibusdam modi. Architecto molestias,
                libero cum quas minus sunt dolorem. Autem, beatae. Non corrupti
                quod nam qui nobis vero error necessitatibus!
              </p>
            </Col>
            <Col md={4}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eum quibusdam iure sed a eaque et sunt beatae laudantium
                officia? Mollitia deleniti blanditiis sed beatae consectetur
                cupiditate nobis rem. Dolor quia, beatae nam voluptatum adipisci
                libero quasi culpa velit possimus enim impedit assumenda totam
                illum reprehenderit expedita esse. Dolorem, maxime.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#eff8ff'
          fill-opacity='1'
          d='M0,160L26.7,138.7C53.3,117,107,75,160,85.3C213.3,96,267,160,320,202.7C373.3,245,427,267,480,282.7C533.3,299,587,309,640,272C693.3,235,747,149,800,138.7C853.3,128,907,192,960,186.7C1013.3,181,1067,107,1120,80C1173.3,53,1227,75,1280,117.3C1333.3,160,1387,224,1413,256L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
};
export default About;
