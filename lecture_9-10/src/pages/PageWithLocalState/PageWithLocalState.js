import React, { useEffect, useState } from 'react';
import {api} from '../../api/api.js'

import Spinner from 'react-bootstrap/Spinner';

import UsersList from '../../components/UsersList/UsersList.js';

export default function PageWithLocalState() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [isError, setError] = useState(false)

  useEffect(() => {
    setLoading(true);
    api.get()
    .then(res => {
      setItems(res);
    })
    .catch (err => {
      console.error(err);
      setError(true)
    })
    .finally(() => {
      setLoading(false);
    })
  }, [])

  if (isError) {
    return(
      <h2> Something went wrong </h2>
    )
  }
  if (loading) {
    return (
      <Spinner animation="border" variant="success" style={{width: '8rem', height: '8rem'}}/>
    )
  } 
  return(
    <>
      <h2>Without Redux</h2>
      <UsersList
        list={items}
      />
    </>
  )
}