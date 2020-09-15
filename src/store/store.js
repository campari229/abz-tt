import { createStore } from 'redux';

const SET_USERS = 'SET_USERS';

export const setUsers = (users) => ({type: SET_USERS, users: users})

export const getUsers = (state) => state.users;

const initialState = {
  users: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store;
