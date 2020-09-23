import React from 'react';
import { useDispatch } from 'react-redux';

import { navigationToggler } from '../../store/store';

import './Header.scss';

export const Header = () => {
  const dispatch = useDispatch()

  return (
    <section className="header" id="header">
      <div className="header__logo">
        <img alt="logo" className="header__logo-img" src='/images/logo.svg' />
      </div>
      <div className="header__navigation navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a className="navigation__link" href="#header">About me</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#header">Realationships</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#header">Requirements</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#header">Users</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#header">Sign Up</a>
          </li>
        </ul>
      </div>
      <button className="header__burger-menu" onClick={() => dispatch(navigationToggler(true))}>
        <img src='/images/menu icon.svg' alt="burger" />
      </button>
    </section>
  )
}
