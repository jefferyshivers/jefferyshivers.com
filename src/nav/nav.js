import React, { Component } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import cx from 'classnames';
import './nav.scss';

const Title = () => <div className="title">
  <h1>Jeffery Shivers</h1>
  <h2>Software Engineer, Musician, Bostonian</h2>
</div>;

const createControlItem = size => ({ linkTo, label }) => <li className="control">
  <NavLink
    // smooth
    scroll={el => {
      (size.isLandscape() ? el.parentNode : window).scroll({
        top: el.offsetTop,
        left: 0,
        behavior: "smooth"
      });
      console.log('scrolled?')
    }}
    to={linkTo}
    className="control-anchor"
    activeClassName="selected">
    {label}
  </NavLink>
</li>;

const ControlItems = ({ children }) => <div className="controls">
  <ul>
    {children}
  </ul>
</div>;

export default ({ size }) => {
  const ControlItem = createControlItem(size);

  return <nav className={cx({
    "small": size.isSmall(),
    "landscape": size.isLandscape()
  })}>
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
  </nav>
};
