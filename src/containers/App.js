import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  // Route, 
  // Switch 
} from 'react-router-dom';

import IconBar from './IconBar'
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <IconBar />
          <Nav />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
