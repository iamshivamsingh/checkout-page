import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { addBilling } from '../../store/action/checkoutAction';
import { useDispatch } from 'react-redux';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name required'),
  lastName: Yup.string().required('Last Name required'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: Yup.string()
    .email('Email format is invalids')
    .required('Email Required'),
});

const BillingInfo = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    dispatch(addBilling(data));
  };

  return (
    <Form className='mt-4' noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='First Name'
            {...register('firstName')}
            isInvalid={!!errors.firstName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.firstName?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Last Name'
            {...register('lastName')}
            isInvalid={!!errors.lastName}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.lastName?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className='mb-3' controlId='formGridAddress1'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='Email'
          {...register('email')}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formGridAddress2'>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type='number'
          placeholder='Phone No'
          {...register('phone')}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.phone?.message}
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
