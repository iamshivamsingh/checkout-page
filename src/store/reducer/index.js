import { combineReducers } from 'redux';
import checkoutReducer from './checkoutReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  checkout: checkoutReducer,
  carts: cartReducer,
});

export default rootReducer;
