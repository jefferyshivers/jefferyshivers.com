import React, { Component } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import cx from 'classnames';
import './nav.scss';

import TitlePlate from '../titlePlate';

const Title = () => <div className="titleContainer">
  <TitlePlate />
</div>;

const createControlItem = size => ({ linkTo, label }) => (
  <li className="controlItem">
    <NavLink
      scroll={el => {
        (size.isLandscape() ? el.parentNode : window).scroll({
          top: el.offsetTop,
          left: 0,
          behavior: "smooth"
        });
      }}
      to={linkTo}
      className="control-anchor"
      activeClassName="selected">
      {label}
    </NavLink>
  </li>
);

const ControlItems = ({ children }) => <div className="controlItemsContainer">
  <ul>
    {children}
  </ul>
</div>;

export default ({ size, open, handleClose }) => {
  const ControlItem = createControlItem(size);

  return <nav className={cx({
    "open": open
  })} onClick={handleClose}>
    <div className="outer">
      <div className="inner">
        <Title />
        <ControlItems>
          <ControlItem linkTo="/#about" label="about" />
          <ControlItem linkTo="/#projects" label="projects" />
          <ControlItem linkTo="/#music" label="music" />
          <ControlItem linkTo="/#contact" label="contact" />
          <ControlItem linkTo="/resume" label="resume" />
        </ControlItems>
      </div>
    </div>
  </nav>
};
