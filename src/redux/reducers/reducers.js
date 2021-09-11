import actionTypes from '../actions/actionsTypes';

export default function reducers(state = [], { type, data }) {
  let selectedLink;
  let selectedLinkToObject;
  let updatedState;
  switch (type) {
    case actionTypes.LOAD_LINKS:
      return data;

    case actionTypes.ADD_LINK:
      return [...state, { id: state.length + 1, url: data[0], text: data[1] }];

    case actionTypes.DELETE_LINK:
      return state.filter((link) => link.id !== data);

    case actionTypes.UPDATE_LINK:
      debugger;
      selectedLink = state.filter((link) => link.id === data[0]); // returns [{id: X, ....}]
      selectedLinkToObject = Object.assign({}, ...selectedLink); // convert array of obj to obj
      selectedLinkToObject = { ...selectedLinkToObject, url: data[1], text: data[2] };
      updatedState = [...state, selectedLinkToObject];
      return updatedState.sort((a, b) => (a.id - b.id));

    default:
      return state;
  }
}
