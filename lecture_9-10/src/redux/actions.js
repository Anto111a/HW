import * as types from './types.js';
import '../api/api.js';
import {api} from '../api/api.js';

export const getUsersList = () => {
  return dispatch => {
    dispatch (setLoader(true))
      api.get()
      .then( result => {
        dispatch(setUsersList(result));
        dispatch(setLoader(false));
      })
      .catch (err => {
        console.log(err);
      })
  }
}

const setLoader = currentState => ({
  type: types.SET_LOADER,
  payload: currentState
})
 
const setUsersList = list => ({
  type: types.SET_USERS_LIST,
  payload: list
})