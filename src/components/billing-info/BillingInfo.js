import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { addBilling } from '../../store/action/checkoutAction';
import { useDispatch } from 'react-redux';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const BillingInfo = () => {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (firstName === '') {
      errors['firstName'] = 'First Name Required';
    }
    if (lastName === '') {
      errors['lastName'] = 'Last Name Required';
    }
    if (email === '') {
      errors['email'] = 'Email Required';
    }
    if (phone === '') {
      errors['phone'] = 'Phone No Required';
    }
    if (!phone.match(phoneRegExp)) {
      errors['phone'] = 'Please provide valid phone number';
    }
    if (!validateEmail(email)) {
      errors['email'] = 'Please provide valid email address';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      dispatch(addBilling(formData));
    }
  };

  const { firstName, lastName, email, phone } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form className='mt-4' noValidate onSubmit={(e) => onSubmit(e)}>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='First Name'
            onChange={onChange}
            value={firstName}
            name='firstName'
            isInvalid={!!errors.firstName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Last Name'
            onChange={onChange}
            value={lastName}
            name='lastName'
            isInvalid={!!errors.lastName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className='mb-3' controlId='formGridAddress1'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='Email'
          onChange={onChange}
          value={email}
          name='email'
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formGridAddress2'>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type='number'
          placeholder='Phone No'
          onChange={onChange}
          value={phone}
          name='phone'
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>
      <div className='d-grid my-4'>
        <Button variant='primary' size='md' type='submit'>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default BillingInfo;
