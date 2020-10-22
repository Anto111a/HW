import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUsers } from '../../redux/actions.js'

import Spinner from 'react-bootstrap/Spinner';
import UsersList from '../../components/UsersList/UsersList.js';


export default function PageWithReduxState() {
  const dispatch = useDispatch();
  const loader = useSelector( state => state.users.isRequesting);
  const requestFailed = useSelector( state => state.users.isRequestFailed);
  const items = useSelector( state => state.users.items);

  useEffect(() => {
    dispatch(requestUsers())
  }, [dispatch]);


  if (requestFailed) {
    return(
      <h2> Something went wrong </h2>
    )
  }

  if (loader) {
    return (
      <>
        <Spinner 
          animation="border" 
          variant="success" 
          style={{width: '8rem', height: '8rem'}}
        />
      </>
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