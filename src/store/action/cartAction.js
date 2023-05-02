import {
  ADD_ITEM_IN_CART,
  EMPTY_CART,
  REMOVE_ITEM_FROM_CART,
} from '../types/cartTypes';

const addProductInCart = (value) => async (dispatch) => {
  dispatch({
    type: ADD_ITEM_IN_CART,
    payload: value,
  });
};

const removeFromCarts = (value) => async (dispatch) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: value,
  });
};

const emptyCart = (value) => async (dispatch) => {
  dispatch({
    type: EMPTY_CART,
  });
};

export { addProductInCart, removeFromCarts, emptyCart };
