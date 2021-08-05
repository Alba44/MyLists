import actionTypes from './actionsTypes';

export function addLink(url, label) {
  return {
    type: actionTypes.ADD_LINK,
    data: [url, label],
  };
}

export function deleteLink(id) {
  return {
    type: actionTypes.DELETE_LINK,
    data: id,
  };
}
