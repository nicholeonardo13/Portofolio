import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='primary'
        variant='dark'
        className='shadow'
      >
        <Container>
          <Navbar.Brand href='#home'>Bocil Official</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <Nav.Link className='active' href='#'>
                Home
              </Nav.Link>
              <Nav.Link href='#'>About</Nav.Link>
              <Nav.Link href='#'>Projects</Nav.Link>
              <Nav.Link href='#'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
