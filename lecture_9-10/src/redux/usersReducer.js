import * as types from './types.js';

const initialState = {
  loading: true,
  items:[]
}

export const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.SET_USERS_LIST: {
      return {
        ...state,
        items: action.payload
      };
    }
    case types.SET_LOADER: {
      return {
        ...state,
        loading: action.payload
      }
    }
    default: {
      return state;
  }
}
}