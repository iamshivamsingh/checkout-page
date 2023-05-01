import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const MainModal = (props) => {
  const { billing, shipping } = useSelector((state) => state.checkout);

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          User's Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MainModal;
