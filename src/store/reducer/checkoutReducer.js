import { ADD_BILLING, ADD_PAYMENT, ADD_SHIPPING } from '../types/checkoutTypes';

const initialState = {
  billing: [],
  shipping: [],
  payment: [],
  currentWindow: '0',
};

const checkoutReducer = (state = initialState, action) => {
  console.log({ action });
  switch (action.type) {
    case ADD_BILLING:
      return {
        ...state,
        billing: action.payload,
        currentWindow: '1',
      };
    case ADD_SHIPPING:
      return {
        ...state,
        shipping: action.payload,
        currentWindow: '2',
      };
    case ADD_PAYMENT:
      return {
        ...state,
        currentWindow: '3',
        payment: action.payload,
      };

    default:
      return state;
  }
};

export default checkoutReducer;
