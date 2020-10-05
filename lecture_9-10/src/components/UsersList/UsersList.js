import React from 'react';

import UserItem from '../UserItem/UserItem';
import Table from 'react-bootstrap/Table'

export default function UsersList({list}) {
  return(
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>ID</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) =>
          <UserItem
            key={index}
            userData={item}
          />
        )}
      </tbody>
    </Table>
  )
}