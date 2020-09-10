import React from 'react';

import './Header.scss';

export const Header = () => {
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
    </section>
  )
}
