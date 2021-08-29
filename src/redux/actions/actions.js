import actionTypes from './actionsTypes';
import allLinks from '../../shared/links';

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

export function loadLinks() {
  return {
    type: actionTypes.LOAD_LINKS,
    data: allLinks,
  };
}
