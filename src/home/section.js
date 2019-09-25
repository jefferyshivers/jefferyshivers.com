import React from 'react';

export default ({ children, title }) => <section id={title}>
  <h2>{title}</h2>
  {children}
</section>;
