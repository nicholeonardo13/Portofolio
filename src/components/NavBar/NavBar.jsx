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
        fixed='top'
      >
        <Container>
          <Navbar.Brand href='#home'>Bocil Official</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#projects'>Projects</Nav.Link>
              <Nav.Link href='#'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
