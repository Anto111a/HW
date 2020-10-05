import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer.js';

const middlewareEnhancer = applyMiddleware(thunk);

export const store = createStore(
  rootReducer,
  compose(
    middlewareEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
