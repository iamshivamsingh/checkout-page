import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addPayment } from '../../store/action/checkoutAction';
import { useState } from 'react';

const PaymentInfo = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    cardNumber: '',
    cvv: '',
    expirationDate: '',
  });

  const { cardNumber, cvv, expirationDate } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (cardNumber === '') {
      errors['cardNumber'] = 'Card Number Required';
    }
    if (cvv === '') {
      errors['cvv'] = 'CVV Required';
    }
    if (expirationDate === '') {
      errors['expirationDate'] = 'Expiration Date Required';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      dispatch(addPayment(formData));
    }
  };
  return (
    <Form className='mt-4' noValidate onSubmit={(e) => onSubmit(e)}>
      <Form.Group className='mb-3' controlId='formGridAddress1'>
        <Form.Label>Credit-Card Number</Form.Label>
        <Form.Control
          type='text'
          placeholder='Credit-Card Number'
          name='cardNumber'
          value={cardNumber}
          onChange={onChange}
          isInvalid={!!errors.cardNumber}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.cardNumber}
        </Form.Control.Feedback>
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>Security Code</Form.Label>
          <Form.Control
            type='number'
            placeholder='Security Code'
            name='cvv'
            value={cvv}
            onChange={onChange}
            isInvalid={!!errors.cvv}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.cvv}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Label>Expirtation Date</Form.Label>
          <Form.Control
            type='text'
            placeholder='Expirtation Date'
            name='expirationDate'
            value={expirationDate}
            onChange={onChange}
            isInvalid={!!errors.expirationDate}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.expirationDate}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <div className='d-grid my-4'>
        <Button variant='primary' size='md' type='submit'>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default PaymentInfo;
