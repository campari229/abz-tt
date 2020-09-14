import React, { useEffect, useState } from 'react';

import { UserCard } from '../UserCard/UserCard';
import { getUsers } from '../../api';

import './Users.scss';

// const href = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5'

export const Users = () => {
  const [users, setUsers] = useState([]);

  async function getData() {
    setUsers((await getUsers(6)).users)
  }

  useEffect(() => {
    getData();
  }, [])

  console.log(users);

  return (
    <section className="users">
      <h3 className="users__title">Our cheerful users</h3>
      <h4 className="users__semi-title">Atention! Sorting uses by registration date</h4>
      <ul className="users__list">
        {users.map(user => (
          <li className="users__card">
            <UserCard user={user} />
          </li>
        ))}
      </ul>
      <button className="users__btn" type="button">Show more</button>
    </section>
  )
}
