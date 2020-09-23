import React from 'react';
import { useDispatch } from 'react-redux';

import { navigationToggler } from '../../store/store';

import './Header.scss';

export const Header = () => {
  const dispatch = useDispatch()

  return (
    <section className="header" id="header">
      <div className="header__logo">
        <img alt="logo" className="header__logo-img" src='images/logo.svg' />
      </div>
      <div className="header__navigation navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a className="navigation__link" href="#registration">About me</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#registration">Realationships</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#registration">Requirements</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#registration">Users</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#registration">Sign Up</a>
          </li>
        </ul>
      </div>
      <button className="header__burger-menu" onClick={() => dispatch(navigationToggler(true))}>
        <img src='images/menu icon.svg' alt="burger" />
      </button>
    </section>
  )
}
