import { Badge, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCarts } from '../../store/action/cartAction';
import { useNavigate, useLocation } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const { carts } = useSelector((state) => state.carts);
  const price = carts.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return (
    <div className='border p-4'>
      <h4>Cart</h4>
      <hr />
      <Table hover>
        <thead>
          {carts.map((item) => (
            <tr key={item.id}>
              <th>{item.name}</th>
              <td>$ {Number(item.price).toFixed(2)}</td>
              <td>
                {location.pathname !== '/confirm' && (
                  <Badge
                    bg='secondary'
                    onClick={() => dispatch(removeFromCarts(item))}
                    className='mouse-pointer'
                  >
                    X
                  </Badge>
                )}
              </td>
            </tr>
          ))}
          {carts.length !== 0 && (
            <tr>
              <th>Total Price</th>
              <td>$ {Number(price).toFixed(2)}</td>
            </tr>
          )}
        </thead>
        {carts.length === 0 && (
          <Button
            variant='primary'
            onClick={() => history('/')}
            className='col-lg-12 center'
          >
            Go To Listing
          </Button>
        )}
      </Table>
    </div>
  );
};

export default Cart;
