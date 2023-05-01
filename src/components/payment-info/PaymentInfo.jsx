import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addPayment } from '../../store/action/checkoutAction';

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Credit card number must only contain digits')
    .test('credit-card-number', 'Invalid credit card number', function (value) {
      if (!value) {
        return false;
      }

      // Remove all spaces and dashes from the credit card number
      const cleanedValue = value.replace(/[\s-]/g, '');

      // Check if the credit card number is of a valid length
      if (cleanedValue.length < 13 || cleanedValue.length > 19) {
        return false;
      }

      let sum = 0;
      let shouldDouble = false;
      for (let i = cleanedValue.length - 1; i >= 0; i--) {
        let digit = parseInt(cleanedValue.charAt(i));

        if (shouldDouble) {
          digit *= 2;
          if (digit > 9) {
            digit -= 9;
          }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
      }

      return sum % 10 === 0;
    }),

  expirationDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, 'Invalid expiration date')
    .test(
      'expiration-date',
      'Expiration date must be greater than or equal to current date',
      function (value) {
        if (!value) {
          return false;
        }

        const [month, year] = value.split('/');

        const formatYear =
          parseInt(year) >= 0 && parseInt(year) <= 30
            ? 2000 + parseInt(year)
            : 1900 + parseInt(year);

        // Create the Date object
        const date = new Date(
          formatYear,
          parseInt(month) - 1,
          parseInt('01')
        ).getTime();
        console.log({ date, formatYear });
        return date >= new Date();
      }
    ),

  cvv: Yup.string().matches(/^[0-9]{3,4}$/, 'CVV code must be 3 or 4 digits'),
});

const PaymentInfo = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => dispatch(addPayment(data));
  return (
    <Form className='mt-4' noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className='mb-3' controlId='formGridAddress1'>
        <Form.Label>Credit-Card Number</Form.Label>
        <Form.Control
          type='text'
          placeholder='Credit-Card Number'
          {...register('cardNumber')}
          isInvalid={!!errors.cardNumber}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.cardNumber?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>Security Code</Form.Label>
          <Form.Control
            type='number'
            placeholder='Security Code'
            {...register('cvv')}
            isInvalid={!!errors.cvv}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.cvv?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Label>Expirtation Date</Form.Label>
          <Form.Control
            type='text'
            placeholder='Expirtation Date'
            {...register('expirationDate')}
            isInvalid={!!errors.expirationDate}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.expirationDate?.message}
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
