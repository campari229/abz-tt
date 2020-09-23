import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { isNavigationShown, navigationToggler } from '../../store/store';

import './MobileNavigation.scss';

export const MobileNavigation = () => {
  const navigationStatus = useSelector(isNavigationShown);
  const dispatch = useDispatch();

  return (
    <section
      className="mobile-navigation"
      style={navigationStatus ? { transform: "translateX(0)", backgroundColor: "rgba(0, 0, 0, .5)" } : { transform: "translateX(-100%)" }}
      onClick={(e) => {
        if (e.target.tagName === 'SECTION') {
          dispatch(navigationToggler(false))
        }
      }}
    >
      <ul className="mobile-navigation__list">
        <div className="header__logo header__logo--mobile">
          <img alt="logo" className="header__logo-img" src='/images/logo.svg' />
        </div>
        <div className="mobile-navigation__section">
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">About me</a>
          </li>
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Relationships</a>
          </li>
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Users</a>
          </li>
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Sign Up</a>
          </li>
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Terms and Conditions</a>
          </li>
        </div>
        <div className="mobile-navigation__section">
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">How it works</a>
          </li>
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Partnership</a>
          </li>
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Help</a>
          </li>
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Leave testimonial</a>
          </li>
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Contact us</a>
          </li>
        </div>
        <div className="mobile-navigation__section">
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Articles</a>
          </li>
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Our news</a>
          </li>
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Testimonials</a>
          </li>
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Licenses</a>
          </li>
          <li className="mobile-navigation__item">
            <a className="mobile-navigation__link" href="#registration">Privacy Policy</a>
          </li>
        </div>
      </ul>
    </section>
  )
}
