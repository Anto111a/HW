import * as types from './types.js';
import '../api/api.js';
import {api} from '../api/api.js';

export const requestUsers = () => {
  return dispatch => {
      dispatch(getUsersList())
      api.get()
      .then( result => {
        dispatch(receiveUsersList(result))
      })
      .catch (err => {
        dispatch(requestFailed());
        console.log(err);
      })
  }
}

const requestFailed = () => ({
  type: types.REQUEST_FAILED
})

const getUsersList = () => ({
   type: types.GET_USERS_LIST
})

const receiveUsersList = list => ({
  type: types.RECEIVE_USERS_LIST,
  payload: list
})