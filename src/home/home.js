import React from 'react';

import { PageViewInteraction } from '../events';

import About from './about';
import Projects from './projects';
import Music from './music';
import Contact from './contact';

export default () => {
  new PageViewInteraction({ path: window.location.pathname }).publish();
  return (
    <React.Fragment>
      <About />
      <Projects />
      <Music />
      <Contact />
    </React.Fragment>
  );
}
