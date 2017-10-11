import React from 'react';

import '../styles/NavDir.css'

const NavDir = props => {
  const div_style = {
    marginLeft: `${(props.indent * 10) + 5}px`
  }

  const arrow_style = (props.tabs[props.title]) ? {
    transform: 'rotateZ(45deg) translateX(2px) translateY(5px)'
  } : {}

  const dynamicChildren = React.Children.map(props.children, function(child) {
    return React.cloneElement(child, { indent: props.indent + 1 })
  });

  const toggleDirectory = () => {
    props.onToggleDirectory(props.title)
  }

  return(
    <div>
      <div className='NavDir' onClick={toggleDirectory}>
        <div style={div_style} className='dir-title'>
          <i style={arrow_style} className="material-icons">keyboard_arrow_right</i>
          {props.title}
        </div>
      </div>
      <div>
      {(props.tabs[props.title]) ? dynamicChildren : null}
      </div>
    </div>
  )
}

export default NavDir;