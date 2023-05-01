import React, { useEffect, useState } from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import {
  BillingInfo,
  ShippingInfo,
  PaymentInfo,
  Modal,
  Cart,
} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '../store/action/checkoutAction';

const Checkout = () => {
  const dispatch = useDispatch();
  const { currentWindow, userInfoModal } = useSelector(
    (state) => state.checkout
  );

  return (
    <>
      <Row>
        <Col sm={8}>
          <h4 className='my-4'>Checkout Page</h4>
          <Accordion activeKey={currentWindow}>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Billing Information</Accordion.Header>
              <Accordion.Body>
                <BillingInfo />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Shipping Information</Accordion.Header>
              <Accordion.Body>
                <ShippingInfo />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
              <Accordion.Header>Payment Information</Accordion.Header>
              <Accordion.Body>
                <PaymentInfo />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col sm={4} className='mt-4'>
          <Cart />
        </Col>
      </Row>{' '}
      <Modal show={userInfoModal} onHide={() => dispatch(showModal(false))} />
    </>
  );
};

export default Checkout;
