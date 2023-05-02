import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../components';

const Confirm = () => {
  const history = useNavigate();
  const { billing, shipping } = useSelector((state) => state.checkout);

  return (
    <Row>
      <h2 className='p-2'>Confirmation Page</h2>
      <Col sm={8} className='border p-4'>
        <Table hover>
          <thead>
            <tr>
              <th>First Name</th>
              <td>{billing?.firstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{billing?.lastName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{billing?.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{billing?.phone}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{shipping?.address}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{shipping?.state}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{shipping?.city}</td>
            </tr>
            <tr>
              <th>Postal Code</th>
              <td>{shipping?.postal}</td>
            </tr>
          </thead>
        </Table>
        <Button
          variant='primary'
          onClick={() => history('/success')}
          className='col-lg-12 center'
        >
          Confirm And Make Payment
        </Button>
      </Col>
      <Col sm={4}>
        <Cart />
      </Col>
    </Row>
  );
};

export default Confirm;
