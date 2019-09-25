import React, { Component, Fragment } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import { handleResize, WindowParameters } from './utils/resize';

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
      size: new WindowParameters()
    };
    this._handleResize = this._handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this._handleResize);
    this._handleResize();
  }

  _handleResize() {
    handleResize(size => {
      this.setState({ size })
    });
  }

  render() {
    return <Router history={history}>
      <div className={cx("app", {
        "small": this.state.size.isSmall(),
        "landscape": this.state.size.isLandscape()
      })}>
        <Nav size={this.state.size} />
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
