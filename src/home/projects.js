import React from 'react';

import Section from './section';

export default () => <Section title="projects">
  <article>
    <h3>
      <a href="https://github.com/tacolabs/paper"><em>latex-js</em>. a Node library for creating TeX documents from Javascript</a>
    </h3>
    <p>
      This library allows you to programatically create LaTeX source documents from Javascript. This would be useful in cases where rigid components of a document structure are not known until runtime, such as the presence or appearance of a section, or perhaps how the compiler should handle the variable document.
      </p>
  </article>

  <article>
    <h3>
      <a href="https://github.com/tacolabs/paper"><em>Paper</em>. a Java library that provides an interface around documents that can be rendered</a>
    </h3>
    <p>
      This is a pet project of mine which focuses on defining a simply API around a document representation and the way it is interacted with and rendered into something else. The project comes with a small plugin module that includes example implmentations for HTML documents and a Flying Saucer PDF renderer.
      </p>
  </article>

  <article>
    <h3>
      <a href="https://github.com/openlilylib/scholarly"><em>ScholarLY</em>. an extension library for GNU LilyPond software</a>
    </h3>
    <p>
      I worked on ScholarLY, a part of the OpenLilyLib project, in summer 2016 as a Google Summer of Code intern following the completion of my grad studies at Tufts.
      </p>
  </article>

  <article>
    <h3>
      <a href="https://github.com/jefferyshivers">Other projects on my personal Github</a>
    </h3>
  </article>
</Section>;
