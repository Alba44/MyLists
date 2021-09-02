import { combineReducers } from 'redux';
import links from './reducers';

const rootReducer = combineReducers({
  links, // reducers name must be property name from initialState
});

export default rootReducer;
