import React from 'react';

import Section from './section';
import Photo from "../assets/photo.jpeg";

export default () => <Section title="about">
  <p>
    Hello, I'm Jeffery Shivers. I am currently a Software Engineer at <a href="https://pos.toasttab.com" target="_blank">Toast</a> in Boston.
  </p>

  <picture-frame>
    <img src={Photo} alt="headshot" />
  </picture-frame>

  <p>
    I usually work in Java (with tools like RxJava, Dropwizard, Pulsar) and NodeJS (Typescript, React, Express).
    I'm also a huge proponent of gRPC and protocol buffers, and maintain a tool for packaging protobufs called <a href="" target="_blank">protop</a>.
  </p>
  <p>
    Sometimes I work on open source projects like GNU LilyPond (Google Summer of Code 2016) and the Open Music Initiative (IDEO, Summer 2017 fellowship). 
    I share most of my work on <a href="https://github.com/jefferyshivers" target="_blank">Github</a> and occasionally post articles on <a href="https://medium.com/@jefferyshivers" target="_blank">Medium</a>.
  </p>
  <p>
    Prior to beginning my career in software development, I studied music composition, and have had performances of my music around the U.S. and Europe. 
    I've held several artist residencies, including one at Listhus in northern Iceland, and I've lectured on my music at Harvard University and Fabra i Coats in Barcelona.
  </p>
</Section>;
