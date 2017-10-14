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

    const content = me[this.props.selectedFile].map((content, index) => {
      let result
      let img_style = {
        width: 'calc(100% - 50px)',
        maxWidth: '300px',
        height: 'auto',
        margin: '0 25px',
        boxShadow: '0 0 10px rgba(0,0,0,.5)',
        borderRadius: '2px'
      }

      if (content.type === 'text') {
        result = content.body
        result = {__html: result};
        result = (<div key={index} className="inner-content" dangerouslySetInnerHTML={result} />);
      } else if (content.type === 'image') {
        result = (<img key={index} alt={content.alt} src={content.src} style={img_style}/>)
      }

      return result;
    })

    return(
      <div className="Main" style={main_style}>
        <div className='title'>
          <div className='title-tab'>
            <span className='JS'>JS</span>
            <span>{this.props.selectedFile}</span>
          </div>
        </div>
        <div className='content'>
          {content}
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