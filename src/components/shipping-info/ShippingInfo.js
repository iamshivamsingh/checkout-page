import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addShipping } from '../../store/action/checkoutAction';

const ShippingInfo = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    address: '',
    state: '',
    city: '',
    postal: '',
  });

  const { address, state, city, postal } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (address === '') {
      errors['address'] = 'First Name Required';
    }
    if (state === '') {
      errors['state'] = 'Last Name Required';
    }
    if (city === '') {
      errors['city'] = 'Email Required';
    }
    if (postal === '') {
      errors['postal'] = 'Phone No Required';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      dispatch(addShipping(formData));
    }
  };

  return (
    <Form className='mt-4' noValidate onSubmit={(e) => onSubmit(e)}>
      <Form.Group className='mb-3' controlId='formGridAddress1'>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type='text'
          placeholder='Address'
          name='address'
          value={address}
          onChange={onChange}
          isInvalid={!!errors.address}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.address}
        </Form.Control.Feedback>
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>State</Form.Label>
          <Form.Control
            type='text'
            placeholder='State'
            name='state'
            value={state}
            isInvalid={!!errors.state}
            onChange={onChange}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.state}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='City'
            name='city'
            value={city}
            isInvalid={!!errors.city}
            onChange={onChange}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.city}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Postal'
            name='postal'
            value={postal}
            isInvalid={!!errors.postal}
            onChange={onChange}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.postal}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div className='d-grid my-4 mouse-pointer'>
        <Button variant='primary' size='md' type='submit'>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default ShippingInfo;
