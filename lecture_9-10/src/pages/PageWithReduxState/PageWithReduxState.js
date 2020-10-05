import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersList } from '../../redux/actions.js'

import Spinner from 'react-bootstrap/Spinner';
import UsersList from '../../components/UsersList/UsersList.js';


export default function PageWithReduxState() {
  const dispatch = useDispatch();
  const loader = useSelector( state => state.users.loading);
  const items = useSelector( state => state.users.items);

  useEffect(() => {
    dispatch(getUsersList())
  }, [dispatch]);

  if (loader) {
    return (
      <Spinner 
        animation="border" 
        variant="success" 
        style={{width: '8rem', height: '8rem'}}
      />
    )
  } 
  return(
    <>
      <h2>With Redux</h2>
      <UsersList
        list={items}
      />
    </>
  )
}