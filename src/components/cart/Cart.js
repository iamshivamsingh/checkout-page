import Table from 'react-bootstrap/Table';

const cartJson = [
  { id: 1, title: 'Apple Iphone 11', price: 1000.0 },
  { id: 2, title: 'One Plus Phone', price: 600.0 },
  { id: 3, title: 'Samsung Phone', price: 800.0 },
  { id: 4, title: 'Nothing Phone', price: 700.0 },
  { id: 5, title: 'Apple Ipad', price: 400.0 },
];

const Cart = () => {
  const price = cartJson.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return (
    <div className='border p-4'>
      <h4>Cart</h4>
      <hr />
      <Table hover>
        <thead>
          {cartJson.map((item) => (
            <tr key={item.id}>
              <th>{item.title}</th>
              <td>${item.price}</td>
            </tr>
          ))}
          <tr>
            <th>Total Price</th>
            <td>${price}</td>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

export default Cart;
