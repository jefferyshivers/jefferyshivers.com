import React from 'react';
import cx from 'classnames';

import './content.scss';

export default ({ children, size }) => <main className={cx({
  "small": size.isSmall(),
  "landscape": size.isLandscape()
})} >
  {children}
</ main>;
