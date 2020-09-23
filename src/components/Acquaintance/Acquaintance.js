import React from 'react';

import './Acquaintance.scss';

export const Acquaintance = () => {
  return (
    <section className="acquaintance">
      <h3 className="acquaintance__title">
        Let's get acquainted
      </h3>
      <div className="acquaintance__main">
        <img
          className="acquaintance__img"
          alt="man with laptop"
          src='images/man-laptop-v1.svg'
        />
        <div className="acquaintance__info">
          <h4 className="acquaintance__info-title">I am cool frontend developer</h4>
          <p className="acquaintance__text">
            We will evaluate how clean your approach to writing CSS and Javascript
            code is. You can use any CSS and Javascript 3rd party libraries without any 
            restriction.
          </p>
          <p className="acquaintance__text">
            If 3rd party css/javascript libraries are added to the project via
            blower/npm/yarn you will get bonus points. If you use any tack runner
            (gulp/webpack) you will get bonus points as well. Slice service directory
            page PSD mockup into HTML5/CSS3.
          </p>
          <a className="acquaintance__link" href="#header">Sing up now</a>
        </div>
      </div>
    </section>
  )
}
