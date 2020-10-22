import * as types from './types.js';

const initialState = {
  items:[],
  isRequesting: false,
  isRequestFailed: false
}

const{GET_USERS_LIST, REQUEST_FAILED, RECEIVE_USERS_LIST} = types;

export const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST: {
      return {
        ...state,
        isRequesting: true,
        isRequestFailed: false
      }
    }
    case REQUEST_FAILED: {
      return {
        ...state,
        isRequesting: false,
        isRequestFailed: true
      }
    }
    case RECEIVE_USERS_LIST: {
      return {
        ...state,
        isRequesting: false,
        isRequestFailed: false,
        items: action.payload
      }
    }
    default: {
      return state;
  }
}
}