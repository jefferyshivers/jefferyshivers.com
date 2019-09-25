import React from 'react';

import Section from './section';

export default () => <Section title="about">
  <p>
    Hi, I'm Jeffery Shivers. I am currently a Software Engineer at <a href="https://pos.toasttab.com" target="_blank">Toast</a> in Boston.
  </p>

  {/* <picture-frame>
        <img src="./assets/headshot.jpg" alt="headshot">
      </picture-frame> */}

  <p>
    I usually work in Java (Dropwizard, Protocol Buffers / gRPC, Pulsar) and NodeJS (React, Express).
  </p>
  <p>
    Sometimes I work on open source projects like GNU LilyPond (Google Summer of Code 2016) and the Open Music Initiative (IDEO Cambridge, Summer 2017 fellowship). I also occasionally put pet projects up on <a href="https://github.com/jefferyshivers" target="_blank">Github</a> and post articles on <a href="https://medium.com/@jefferyshivers" target="_blank">Medium</a>. I am currently working on a package manager for Protocol Buffers called "Salsa", modeled after NPM.
  </p>
  <p>
    Prior to beginning my career in software development, I studied music composition, and have had performances of my music around the U.S. and Europe. I've held several artist residencies, including one at Listhus in northern Iceland, and I've lectured on my music at Harvard University and Fabra i Coats in Barcelona.
  </p>
</Section>;
