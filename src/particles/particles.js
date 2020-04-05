import React from "react"
import cx from "classnames"

import './particles.scss'

export const Particles = ({ quantity, fixed }) => {
  return <div className={cx("particles-container", {
    "fixed": [fixed]
  })}>
    {Array(quantity).fill(<div className="particle" />)}
  </div>
}
