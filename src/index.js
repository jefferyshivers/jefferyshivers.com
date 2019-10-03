import React, { Component, Fragment } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import { handleResize, WindowParameters } from './utils/resize';

import TitleBar from './titleBar';
import Nav from './nav';
import Home from './home';
import Resume from './resume';
import Content from './content';
import './index.scss';

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: new WindowParameters(),
      navOpen: false
    };
    this._handleResize = this._handleResize.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.setNavOpenValue = this.setNavOpenValue.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this._handleResize);
    this._handleResize();
  }

  _handleResize() {
    handleResize(size => {
      this.setState({ size });
    });
  }

  setNavOpenValue(value) {
    this.setState({ navOpen: value });
  }

  toggleNav() {
    this.setNavOpenValue(!this.state.navOpen);
  }

  render() {
    const titleBar = (
      <TitleBar
        navOpen={this.state.navOpen}
        onToggleNavOpen={this.toggleNav}
      />
    );

    return <Router history={history}>
      <div className={cx("app", {
        "small": this.state.size.isSmall(),
        "landscape": this.state.size.isLandscape()
      })}>
        {this.state.size.isLandscape() ? null : titleBar}
        <Nav size={this.state.size} open={this.state.navOpen} handleClose={() => this.setNavOpenValue(false)} />
        <Content size={this.state.size}>
          <Switch>
            <Route exact path="/resume" component={Resume} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Content>
      </div>
    </Router>
  }
};

ReactDOM.render(
  <App />,
  document.getElementsByTagName('body')[0]);
