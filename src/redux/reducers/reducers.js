import actionTypes from '../actions/actionsTypes';

export default function reducers(state = [], { type, data }) {
  switch (type) {
    case actionTypes.ADD_LINK:
      return [...state, { id: state.length + 1, url: data[0], text: data[1] }];

    case actionTypes.DELETE_LINK:
      return state.filter((link) => link.id !== data);

    case actionTypes.LOAD_LINKS:
      return data;

    default:
      return state;
  }
}
