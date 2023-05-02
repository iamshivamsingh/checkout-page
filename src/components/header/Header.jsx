import { Badge, Button, Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { carts } = useSelector((state) => state.carts);
  const history = useNavigate();

  return (
    <Navbar className='bg-white shadow-sm mb-3 p-3'>
      <Container>
        <Nav onClick={() => history('/')} className='cursor-pointer'>
          Header
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button variant='primary' onClick={() => history('/checkout')}>
            Cart <Badge bg='secondary'>{carts.length}</Badge>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
