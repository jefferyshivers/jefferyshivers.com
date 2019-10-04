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

const Theme = {
  LIGHT: "LIGHT",
  DARK: "DARK"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: new WindowParameters(),
      navOpen: false,
      theme: Theme.LIGHT
    };
    this._handleResize = this._handleResize.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.setNavOpenValue = this.setNavOpenValue.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
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

  toggleTheme() {
    this.setState({
      theme: (this.state.theme === Theme.LIGHT) ? Theme.DARK : Theme.LIGHT
    });
    console.log('toggled theme, now:', this.state.theme)
  }

  render() {
    const titleBar = (
      <TitleBar
        navOpen={this.state.navOpen}
        onToggleNavOpen={this.toggleNav}
        handleClickTitlePlate={this.toggleTheme}
      />
    );

    return <Router history={history}>
      <div className={cx("app", {
        "small": this.state.size.isSmall(),
        "landscape": this.state.size.isLandscape(),
        "dark": this.state.theme === Theme.DARK
      })}>
        {this.state.size.isLandscape() ? null : titleBar}
        <Nav
          size={this.state.size}
          open={this.state.navOpen}
          handleClose={() => this.setNavOpenValue(false)}
          toggleTheme={this.toggleTheme}
        />
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
