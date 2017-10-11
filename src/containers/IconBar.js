import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleNavPanel } from '../actions/layout'

import '../styles/IconBar.css'

class IconBar extends Component {
  render() {
    const icon_img_style = {
      width: '24px',
      height: 'auto'
    }
    const AnchorLink = props => {
      return(
        <a href={props.url} target='_blank' rel="noopener noreferrer" className='IconContainer'>
          {props.children}
        </a>
      )
    }

    return(
      <div className="IconBar">

        <div className='IconContainer' onClick={this.props.onToggleNavPanel}>
          <div className='Icon'>
          <i className="material-icons" id='menu-icon'>menu</i>
          </div>
        </div>

        <AnchorLink url='https://github.com/jefferyshivers'>
          <img src='/github.png' alt='gh' style={icon_img_style}/>
        </AnchorLink>

        <AnchorLink url='https://facebook.com/jefferyshivers'>
          <img src='/facebook.png' alt='fb' style={icon_img_style}/>
        </AnchorLink>

        <AnchorLink url='https://twitter.com/jefferyshivers'>
          <img src='/twitter.png' alt='tw' style={icon_img_style}/>
        </AnchorLink>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleNavPanel: () => {
      dispatch(toggleNavPanel())
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(IconBar);