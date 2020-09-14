import React from 'react';

import './UserCard.scss'

export const UserCard = ({ user }) => {
  return (
    <div className="user">
      <img alt="user" src={user.photo} className="user__photo" />
      <h4 className="user__name">{user.name}</h4>
      <p className="user__info">{user.position}</p>
      <p className="user__info">{user.email}</p>
      <p className="user__info">{user.phone}</p>
    </div>
  )
}
