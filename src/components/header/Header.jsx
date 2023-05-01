import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar className='bg-white shadow-sm mb-3 p-3'>
      <Container>
        <Nav>Header</Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
