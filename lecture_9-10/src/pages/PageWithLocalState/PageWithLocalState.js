import React, { useEffect, useState } from 'react';
import {api} from '../../api/api.js'

import Spinner from 'react-bootstrap/Spinner';

import UsersList from '../../components/UsersList/UsersList.js';

export default function PageWithLocalState() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    api.get()
    .then(res => {
      setItems(res);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [])

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