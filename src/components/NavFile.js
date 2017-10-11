import React from 'react';
import { connect } from 'react-redux';
import { navigateFile } from '../actions/navigate'
import { toggleNavPanel } from '../actions/layout'

import '../styles/NavFile.css'

const NavFile = props => {
  const container_style = (props.title === props.selectedFile) ? {
    background: 'lightblue',
    color: 'black'
  } : {}

  const style={
    marginLeft: `${(props.indent * 10) + 20}px`,
  }

  const selectFile = () => {
    props.onSelectFile(props.title)
    if (!props.navLockStatus) {
      props.onToggleNavPanel()
    }
  }

  return(
    <div className='NavFile' onClick={selectFile} style={container_style}>
      <div style={style}>
        {props.title}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedFile: state.navigation.selection,
    navLockStatus: state.layout.nav_lock
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectFile: title => {
      dispatch(navigateFile(title))
    },
    onToggleNavPanel: () => {
      dispatch(toggleNavPanel())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavFile);
