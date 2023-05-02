import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../store/action/cartAction';

const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart());
  }, []);

  return (
    <Alert variant='success'>
      <Alert.Heading>Successfuly Booked the Product.</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className='mb-0'>
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
};

export default Success;
