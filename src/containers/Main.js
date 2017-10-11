import React, { Component } from 'react';
import { connect } from 'react-redux';
import { me } from '../constants/me'

import '../styles/Main.css'

class Main extends Component {
  render() {
    const main_style = this.props.navLock ? {
      left: '250px',
      width: 'calc(100% - 250px)'
    } : {
      left: '50px',
      width: 'calc(100% - 50px)'
    }
    return(
      <div className="Main" style={main_style}>
        <div className='title'>
          <div className='title-tab'>
            <span className='JS'>JS</span>
            <span>{this.props.selectedFile}</span>
          </div>
        </div>
        <div className='content'>
          {me[this.props.selectedFile]}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    selectedFile: state.navigation.selection,
    navLock: state.layout.nav_lock
  }
}

export default connect(
  mapStateToProps,
  null
)(Main);