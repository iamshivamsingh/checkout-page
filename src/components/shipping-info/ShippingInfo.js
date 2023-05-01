import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addShipping } from '../../store/action/checkoutAction';

const validationSchema = Yup.object().shape({
  address: Yup.string().required('Address required'),
  state: Yup.string().required('state required'),
  city: Yup.string().required('City required'),
  postal: Yup.string().required('Postal required'),
});

const ShippingInfo = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => dispatch(addShipping(data));

  return (
    <Form className='mt-4' noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className='mb-3' controlId='formGridAddress1'>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type='text'
          placeholder='Address'
          {...register('address')}
          isInvalid={!!errors.address}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.address?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>State</Form.Label>
          <Form.Control
            type='text'
            placeholder='State'
            {...register('state')}
            isInvalid={!!errors.state}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.state?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='City'
            {...register('city')}
            isInvalid={!!errors.city}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.city?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Postal'
            {...register('postal')}
            isInvalid={!!errors.postal}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.postal?.message}
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
