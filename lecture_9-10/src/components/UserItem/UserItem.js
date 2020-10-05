import React from 'react';

import FigureImage from 'react-bootstrap/FigureImage'

export default function UserItem({userData}) {
  const {id, login, user_url, avatar_url} = userData;
  return(
    <tr>
      <td>{id}</td>
      <td>
        <FigureImage
          width={30}
          height={30}
          src={avatar_url}
          roundedCircle 
        />
      </td>
      <td>{login}</td>
      <td>
        <a
          href={user_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          {user_url}
        </a>
      </td>
    </tr>
  )
}