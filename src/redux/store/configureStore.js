import { compose, applyMiddleware, createStore } from 'redux';
import reduxImmutableStatInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';
import initialState from './initialState';

function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStatInvariant())),
  );
}

export default configureStore();
