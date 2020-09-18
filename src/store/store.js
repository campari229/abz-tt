import { createStore } from 'redux';

const SET_USERS = 'SET_USERS';
const SHOWN_NAVIGATION = 'SHOWN_NAVIGATION';

export const setUsers = (users) => ({type: SET_USERS, users: users})
export const navigationToggler = () => ({type: SHOWN_NAVIGATION})

export const getUsers = (state) => state.users;
export const isNavigationShown = (state) => state.mobileNavigation;

const initialState = {
  users: [],
  mobileNavigation: false,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.users
      }
    case 'SHOWN_NAVIGATION':
      return {
        ...state,
        mobileNavigation: !state.mobileNavigation,
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store;
