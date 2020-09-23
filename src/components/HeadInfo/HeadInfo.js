import React from 'react';

import './HeadInfo.scss';

export const HeaderInfo = () => {
  const width = window.innerWidth;
  return (
    <section className="header-info">
      <h3 className="header-info__title">
        test assignment <br /> for frontend <br /> developer position
      </h3>
      <p className="header-info__text">
        {
          width > 400
          ? (
            `We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository. Please be patient, we consider
            and respond to every application that meets minimum requirements.
            We look foward to your submission. Good luck! The photo has to scale
            in the banner area on the different screens.`
          )
          : (
            `We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository.`
          )
        }
      </p>
      <button className="header-info__btn" type="button">Sing up now</button>
    </section>
  )
}

