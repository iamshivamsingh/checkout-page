import {
  ADD_BILLING,
  ADD_PAYMENT,
  ADD_SHIPPING,
  SHOW_MODAL,
} from '../types/checkoutTypes';

const initialState = {
  billing: [],
  shipping: [],
  payment: [],
  currentWindow: '0',
  userInfoModal: false,
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
        currentWindow: '0',
        payment: action.payload,
        userInfoModal: true,
      };
    case SHOW_MODAL:
      return {
        ...state,
        userInfoModal: action.payload,
      };

    default:
      return state;
  }
};

export default checkoutReducer;
