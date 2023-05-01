import {
  ADD_BILLING,
  ADD_PAYMENT,
  ADD_SHIPPING,
  SHOW_MODAL,
} from '../types/checkoutTypes';

const addBilling = (value) => async (dispatch) => {
  console.log({ value });
  dispatch({
    type: ADD_BILLING,
    payload: value,
  });
};

const addShipping = (value) => async (dispatch) => {
  console.log({ value });
  dispatch({
    type: ADD_SHIPPING,
    payload: value,
  });
};

const addPayment = (value) => async (dispatch) => {
  console.log({ value });
  dispatch({
    type: ADD_PAYMENT,
    payload: value,
  });
};

const showModal = (value) => async (dispatch) => {
  console.log({ value });
  dispatch({
    type: SHOW_MODAL,
    payload: value,
  });
};

export { addBilling, addShipping, addPayment, showModal };
