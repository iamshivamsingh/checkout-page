import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import listingJson from '../constants/lisitingJson';
import { useDispatch, useSelector } from 'react-redux';
import { addProductInCart, removeFromCarts } from '../store/action/cartAction';

const Listing = () => {
  const dispatch = useDispatch();
  const [listing, setListing] = useState(listingJson);
  const { carts } = useSelector((state) => state.carts);

  const selectedId = [];

  carts.map((item) => {
    selectedId.push(item.id);
  });

  return (
    <Container>
      <h2 className='text-center'>Add to Cart Projects</h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {listing.map((listing) => (
          <Col key={listing.id} md={4}>
            <Card
              style={{ width: '22rem', border: 'none' }}
              className='mx-2 mt-4 card_style'
            >
              <Card.Img
                variant='top'
                src={listing.image}
                style={{ height: '16rem' }}
                className='mt-3'
              />
              <Card.Body>
                <Card.Body>
                  <Card.Title>{listing.name}</Card.Title>
                  <Card.Text>Price : ₹ {listing.price}</Card.Text>
                  <div className='button_div d-flex justify-content-center'>
                    {selectedId.includes(listing.id) ? (
                      <Button
                        variant='danger'
                        onClick={() => dispatch(removeFromCarts(listing))}
                        className='col-lg-12'
                      >
                        Remove from carts
                      </Button>
                    ) : (
                      <Button
                        variant='primary'
                        onClick={() => dispatch(addProductInCart(listing))}
                        className='col-lg-12'
                      >
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </Container>
  );
};

export default Listing;
