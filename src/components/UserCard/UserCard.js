import React from 'react';

import './UserCard.scss'

const shortText = (text) => {
  const short = text.split('').splice(0, 20);
  
  return (short.join('') + '...')
}

export const UserCard = ({ user }) => {
  return (
    <div className="user" data-title={user.email}>
      <img alt="user" src={user.photo} className="user__photo" />
      <h4 className="user__name">{user.name.length > 20 ? shortText(user.name) : user.name}</h4>
      <p className="user__info">{user.position}</p>
      <p className="user__info">{user.email.length > 20 ? shortText(user.email) : user.email}</p>
      <p className="user__info">{user.phone}</p>
    </div>
  )
}
