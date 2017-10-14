import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleNavLock } from '../actions/layout'
import NavFile from '../components/NavFile';
import NavDir from '../components/NavDir';

import '../styles/Nav.css'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.toggleDirectory = this.toggleDirectory.bind(this)
    this.state = {
      tabs: {
        'Jeffery_Shivers': true,
        'about': true,
        'projects': true,
        'contact': true
      }
    }
  }

  toggleDirectory(title) {
    let tabs = this.state.tabs

    tabs[title] = !tabs[title]
    this.setState({
      tabs: tabs
    })
  }

  render() {
    const panel_style = this.props.navPanel ? {
      left: '50px'
    } : {
      left: '-150px'
    }
    return(
      <div className="Nav" style={panel_style}>
        <NavDir indent={0} title='Jeffery_Shivers' onToggleDirectory={this.toggleDirectory} tabs={this.state.tabs}>
          <NavFile onSelectFile={this.props.onSelectFile} title='intro'/>
          <NavDir title='about' onToggleDirectory={this.toggleDirectory} tabs={this.state.tabs}>
            <NavFile onSelectFile={this.props.onSelectFile} title='past_experience'/>
            <NavFile onSelectFile={this.props.onSelectFile} title='current_activities'/>
          </NavDir>
          <NavDir title='projects' onToggleDirectory={this.toggleDirectory} tabs={this.state.tabs}>
            <NavFile onSelectFile={this.props.onSelectFile} title='one'/>
          </NavDir>
          <NavDir title='contact' onToggleDirectory={this.toggleDirectory} tabs={this.state.tabs}>
            <NavFile onSelectFile={this.props.onSelectFile} title='email'/>
            <NavFile onSelectFile={this.props.onSelectFile} title='social'/>
          </NavDir>
        </NavDir>

        <div className='lock-button' onClick={this.props.onToggleNavLock}>
          <i className="material-icons">lock_open</i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    navPanel: state.layout.nav_panel
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleNavLock: () => {
      dispatch(toggleNavLock())
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);