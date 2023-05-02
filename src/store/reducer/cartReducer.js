import {
  ADD_ITEM_IN_CART,
  EMPTY_CART,
  REMOVE_ITEM_FROM_CART,
} from '../types/cartTypes';

const initialState = {
  carts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_IN_CART:
      const IteamIndex = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (IteamIndex === -1) {
        const temp = { ...action.payload };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
      break;
    case REMOVE_ITEM_FROM_CART:
      const data = state.carts.filter((el) => el.id !== action.payload.id);

      return {
        ...state,
        carts: data,
      };
    case EMPTY_CART:
      return {
        ...state,
        carts: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
