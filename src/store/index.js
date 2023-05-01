import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const initialState = {};
const middleware = [thunk];

//there can be multiple middlewares here
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware, createLogger))
);

export default store;
