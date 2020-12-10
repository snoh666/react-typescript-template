import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/root';

const initializeStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default initializeStore;
