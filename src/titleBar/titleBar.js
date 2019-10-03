import React from 'react';
import cx from 'classnames';

import TitlePlate from '../titlePlate';
import './titleBar.scss';

const ToggleNavButton = ({ navOpen, handleClick }) => {
  return (
    <div onClick={handleClick} className="toggleNavContainer">
      <button className={cx("toggleNav", {
        "navOpen": navOpen
      })}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
};

export default ({ onToggleNavOpen, navOpen }) => (
  <React.Fragment>
    <div className="titleBar">
      <TitlePlate />
    </div>
    <ToggleNavButton handleClick={onToggleNavOpen} navOpen={navOpen} />
  </React.Fragment>
);
