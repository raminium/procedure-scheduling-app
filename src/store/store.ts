import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// this enables Redux Dev Tools in the Browser
const composeEnhancers = (
  window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const store = createStore(
  rootReducer, compose(applyMiddleware(thunk), composeEnhancers()),
);
export default store;
