import actionTypes from '../actions/actionsTypes';
import links from '../../shared/links';

export default function reducers(state = [], { type, data }) {
  debugger;
  switch (type) {
    case actionTypes.ADD_LINK:
      links = [...links, { id: links.length + 1, url: data[0], text: data[1] }];
      return data;

    case actionTypes.DELETE_LINK:
      return data;

    default:
      return state;
  }
}
