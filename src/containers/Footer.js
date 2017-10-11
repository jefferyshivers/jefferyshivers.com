import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/Footer.css'

class Footer extends Component {
  render() {
    return(
      <div className="Footer">
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     selectedFile: state.navigation.selection
//   }
// }

export default connect(
  null,
  null
)(Footer);