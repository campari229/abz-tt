import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UserCard } from '../UserCard/UserCard';
import { loadUsers } from '../../api';

import { setUsers, getUsers } from '../../store/store';

import './Users.scss';

// const href = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5'

export const Users = () => {
  const width = window.innerWidth;
  const usersToLoad = width > 400 ? 6 : 3;
  const dispatch = useDispatch()
  const users = useSelector(getUsers)
  const [loadetUsers, setLoadetUsers] = useState(0);
  const [allUsersLoad, setAllUsersLoad] = useState(false)

  const memoGetData = useCallback(
    async function getData() {
      const result = await loadUsers(loadetUsers + usersToLoad)

      if (loadetUsers <= result.total_users) {
        dispatch(setUsers(result.users))
      }

      setLoadetUsers(loadetUsers + usersToLoad)

      if (loadetUsers + usersToLoad >= result.total_users) {
        setAllUsersLoad(true)
      }
    }, [dispatch, loadetUsers, usersToLoad]
  )

  useEffect(() => {
    memoGetData(6);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <section className="users">
      <h3 className="users__title">Our cheerful users</h3>
      <h4 className="users__semi-title">Atention! Sorting uses by registration date</h4>
      <ul className="users__list">
        {users.map(user => (
          <li className="users__card" key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
      {
        allUsersLoad
        ? <></>
        : (
          <button
            className="users__btn"
            type="button"
            onClick={() => memoGetData()}
          >
            Show more
          </button>
        )
      }
    </section>
  )
}
